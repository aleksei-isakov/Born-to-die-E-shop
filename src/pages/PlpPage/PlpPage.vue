<template>
  <div class="page-wrapper">
    <custom-filter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
    />
    <products-list
      :is-horizontal="false"
      :products="products"
      :items-per-page="itemsPerPage"
    />
    <Pagination :pagination-length="paginationLength" />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { mapGetters, mapActions } from 'vuex';

const LIMIT_PRODUCTS_PER_PAGE = 9;

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
      itemsPerPage: LIMIT_PRODUCTS_PER_PAGE
    };
  },

  computed: {
    ...mapGetters('PlpPageModule', ['products', 'productsQuantity']),

    paginationLength() {
      return Math.ceil(this.productsQuantity / this.itemsPerPage);
    }
  },

  async mounted() {
    await this.getProducts();
  },

  methods: {
    ...mapActions('PlpPageModule', ['getProducts']),
    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
    }
  }
};
</script>

<style>
.page-wrapper {
  max-width: 1440px;
  margin: 45px auto 0;
  padding: 0 50px;
}
</style>
