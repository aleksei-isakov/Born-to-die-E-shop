<template>
  <div class="page-wrapper">
    <custom-filter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
      @onClickSelectOption="onClickSelectOptionHandler"
    />
    <PLPSearchBar @search="onSearchHandler" />
    <products-list
      is-horizontal
      :products="products"
      :items-per-page="DEFAULT_ITEMS_PER_PAGE"
    />
    <Pagination
      :pagination-length="paginationLength"
      :sort-order="sortOrder"
      :sort-field="sortField"
      :input-value="inputValue"
    />
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

const ITEMS_PER_PAGE = 5;
const ASCENDING = 'asc';
const DESCENDING = 'desc';
const CREATING_DATE = 'createdAt';
const PRICE = 'price';

export default {
  name: 'PlpPage',

  components: {
    Pagination,
    CustomFilter,
    ProductsList,
    PLPSearchBar
  },

  data() {
    return {
      selectedIconPath: 'menu_filter_column',
      itemsPerPage: ITEMS_PER_PAGE,
      sortField: CREATING_DATE,
      sortOrder: ASCENDING,
      DEFAULT_ITEMS_PER_PAGE,
      inputValue: undefined,
      page: 1
    };
  },

  computed: {
    ...mapGetters('PlpPageModule', ['products', 'productsQuantity']),

    paginationLength() {
      return Math.ceil(this.productsQuantity / DEFAULT_ITEMS_PER_PAGE);
    }
  },

  async mounted() {
    await this.getProductsList({
      _limit: DEFAULT_ITEMS_PER_PAGE,
      _sort: this.sortField,
      _order: this.sortOrder
    });
  },

  methods: {
    ...mapActions('PlpPageModule', ['getProductsList']),

    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
    },
    onClickSelectOptionHandler(sortValue) {
      this.changeSortField(sortValue);
      this.changeSortOrder(sortValue);
      this.getProductsList({
        _sort: this.sortField,
        _order: this.sortOrder,
        _limit: DEFAULT_ITEMS_PER_PAGE,
        // eslint-disable-next-line camelcase
        name_like: this.inputValue ? this.inputValue : undefined,
        _page: this.page
      });
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

    onSearchHandler(inputValue) {
      this.inputValue = inputValue;
      this.getProductsList({
        q: inputValue ? inputValue : undefined,
        _sort: this.sortField,
        _order: this.sortOrder,
        _limit: DEFAULT_ITEMS_PER_PAGE,
        _page: this.page
      });
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  max-width: 1440px;
  margin: 45px auto 0;
  padding: 0 50px;
}
</style>
