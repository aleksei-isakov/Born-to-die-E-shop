<template>
  <div class="page-wrapper">
    <custom-filter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
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
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

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
    await this.getProducts({ _limit: DEFAULT_ITEMS_PER_PAGE });
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
