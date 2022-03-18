<template>
  <div class="page-wrapper">
    <PLPSearchBar />
    <custom-filter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
      @onClickSelectOption="onClickSelectOptionHandler"
    />
    <products-list
      is-horizontal
      :products="products"
      :items-per-page="DEFAULT_ITEMS_PER_PAGE"
    />
    <pagination :pagination-length="paginationLength" />
  </div>
</template>

<script>
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { mapGetters, mapActions } from 'vuex';
import { SELECTED_OPTIONS_KEYS } from '@/components/CustomFilter/helper';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

const ITEMS_PER_PAGE = 5;
const ASCENDING = 'asc';
const DESCENDING = 'desc';
const CREATING_DATE = 'createdAt';
const PRICE = 'price';

export default {
  name: 'PlpPage',

  components: {
    PLPSearchBar,
    Pagination,
    CustomFilter,
    ProductsList
  },

  data() {
    return {
      selectedIconPath: 'menu_filter_column',
      itemsPerPage: ITEMS_PER_PAGE,
      sortField: CREATING_DATE,
      sortOrder: ASCENDING,
      DEFAULT_ITEMS_PER_PAGE
    };
  },

  computed: {
    ...mapGetters('PlpPageModule', [
      'products',
      'productsQuantity',
      'categories',
      'changedCategory',
      'numberOfPage'
    ]),

    paginationLength() {
      return Math.ceil(this.productsQuantity / DEFAULT_ITEMS_PER_PAGE);
    }
  },

  watch: {
    async changedCategory() {
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
      'getSortField',
      'getSortOrder'
    ]),

    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
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
        'category.name': this.changedCategory
      });
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
