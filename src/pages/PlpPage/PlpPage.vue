<template>
  <div class="page-wrapper">
    <CustomFilter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
    />
    <ProductsList />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
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

  methods: {
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
