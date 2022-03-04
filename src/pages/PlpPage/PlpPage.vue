<template>
  <div class="page-wrapper">
    <CustomFilter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
    />
    <ProductsList
      is-horizontal
      :products="products"
      :items-per-page="DEFAULT_ITEMS_PER_PAGE"
    />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import { mapGetters, mapActions } from 'vuex';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

export default {
  name: 'PlpPage',

  components: {
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
    ...mapGetters('PlpPageModule', ['products'])
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
