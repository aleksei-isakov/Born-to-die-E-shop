<template>
  <div class="page-wrapper">
    <plp-search-bar @search="onSearchHandler" />
    <custom-filter
      :is-horizontal="isHorizontal"
      @switch-view="onClickSwitchView"
      @onClickSelectOption="onClickSelectOptionHandler"
    />
    <products-list
      :is-horizontal="isHorizontal"
      :products="products"
      :items-per-page="DEFAULT_ITEMS_PER_PAGE"
    />
    <pagination :pagination-length="paginationLength" />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { mapGetters, mapActions } from 'vuex';
import { SELECTED_OPTIONS_KEYS } from '@/components/CustomFilter/helper';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';
import {
  ITEMS_PER_PAGE,
  ASCENDING,
  DESCENDING,
  CREATING_DATE,
  PRICE,
  START_NUMBER_OF_PAGE
} from './helper';

export default {
  name: 'PlpPage',

  components: {
    Pagination,
    CustomFilter,
    ProductsList,
    'plp-search-bar': PLPSearchBar
  },

  data() {
    return {
      isHorizontal: false,
      itemsPerPage: ITEMS_PER_PAGE,
      sortField: CREATING_DATE,
      sortOrder: ASCENDING,
      DEFAULT_ITEMS_PER_PAGE,
      inputValue: ''
    };
  },

  computed: {
    ...mapGetters('PlpPageModule', [
      'products',
      'productsQuantity',
      'categories',
      'currentCategory',
      'numberOfPage'
    ]),

    paginationLength() {
      return Math.ceil(this.productsQuantity / DEFAULT_ITEMS_PER_PAGE);
    }
  },

  watch: {
    async currentCategory() {
      await this.sendRequestForProductsList();
    },

    async numberOfPage() {
      await this.sendRequestForProductsList();
    },

    async sortField() {
      await this.sendRequestForProductsList();
    },

    async sortOrder() {
      await this.sendRequestForProductsList();
    },

    async inputValue() {
      await this.sendRequestForProductsList();
    }
  },

  async mounted() {
    await this.getCategories();
    await this.sendRequestForProductsList();
  },

  methods: {
    ...mapActions('PlpPageModule', [
      'getProductsList',
      'getCategories',
      'setNumberOfPage'
    ]),

    onClickSwitchView(isHorizontal) {
      this.isHorizontal = isHorizontal;
    },

    async onClickSelectOptionHandler(sortValue) {
      this.changeSortField(sortValue);
      this.changeSortOrder(sortValue);
    },

    changeSortField(sortValue) {
      if (
        sortValue === SELECTED_OPTIONS_KEYS.OLD_TO_NEW ||
        sortValue === SELECTED_OPTIONS_KEYS.NEW_TO_OLD
      ) {
        this.sortField = CREATING_DATE;

        return;
      }
      this.sortField = PRICE;
    },

    changeSortOrder(sortValue) {
      if (
        sortValue === SELECTED_OPTIONS_KEYS.OLD_TO_NEW ||
        sortValue === SELECTED_OPTIONS_KEYS.CHEAP_TO_EXPENSIVE
      ) {
        this.sortOrder = ASCENDING;

        return;
      }
      this.sortOrder = DESCENDING;
    },

    async sendRequestForProductsList() {
      await this.getProductsList({
        _page: this.numberOfPage,
        _limit: DEFAULT_ITEMS_PER_PAGE,
        _sort: this.sortField,
        _order: this.sortOrder,
        q: this.inputValue,
        'category.name': this.currentCategory
      });
    },

    onSearchHandler(inputValue) {
      this.inputValue = inputValue;
      this.setNumberOfPage(START_NUMBER_OF_PAGE);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.page-wrapper {
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: $tablet-size) {
    max-width: 100%;
  }
}
</style>
