<template>
  <div class="page-wrapper">
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
    <Pagination :pagination-length="paginationLength" />
  </div>
</template>

<script>
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
    ...mapGetters('PlpPageModule', ['products', 'productsQuantity']),

    paginationLength() {
      return Math.ceil(this.productsQuantity / DEFAULT_ITEMS_PER_PAGE);
    }
  },

  async mounted() {
    await this.getProductsList({ _limit: DEFAULT_ITEMS_PER_PAGE });
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
        _limit: DEFAULT_ITEMS_PER_PAGE
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
