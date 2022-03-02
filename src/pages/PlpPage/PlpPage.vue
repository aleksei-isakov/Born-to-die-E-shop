<template>
  <div class="page-wrapper">
    <CustomFilter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
      @onClickSelectOption="onClickSelectOptionHandler"
    />
    <ProductsList
      :products="products"
      :is-horizontal="true"
      :items-per-page="itemsPerPage"
    />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import { mapGetters, mapActions } from 'vuex';
const ITEMS_PER_PAGE = 5;

export default {
  name: 'PlpPage',

  components: {
    CustomFilter,
    ProductsList
  },

  data() {
    return {
      selectedIconPath: 'menu_filter_column',
      itemsPerPage: ITEMS_PER_PAGE
    };
  },

  computed: {
    ...mapGetters('PlpPageModule', ['products'])
  },

  async mounted() {
    await this.getProductsList();
  },

  methods: {
    ...mapActions('PlpPageModule', ['getProductsList']),
    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
    },
    onClickSelectOptionHandler(sortValue) {
      this.getProductsList(sortValue);
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
