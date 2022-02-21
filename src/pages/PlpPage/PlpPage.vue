<template>
  <div class="page-wrapper">
    <CustomFilter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
    />
    <ProductsList :products="PRODUCTS" />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PlpPage',

  components: {
    CustomFilter,
    ProductsList
  },

  data() {
    return {
      selectedIconPath: 'menu_filter_column'
    };
  },

  async mounted() {
    await this.GET_PRODUCTS_FROM_API();
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
    }
  },

  computed: {
    ...mapGetters(['PRODUCTS'])
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
