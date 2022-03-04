<template>
  <div class="page-wrapper">
    <custom-filter
      :selected-icon-path="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
      @onClickSelectOption="onClickSelectOptionHandler"
    />
    <products-list
      :products="products"
      is-horizontal
      :items-per-page="itemsPerPage"
    />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import { mapGetters, mapActions } from 'vuex';
import { SELECTED_OPTIONS_KEYS } from '@/components/CustomFilter/helper';

const ITEMS_PER_PAGE = 5;
const ASCENDING = 'asc';
const DESCENDING = 'desc';
const CREATING_DATE = 'createdAt';
const PRICE = 'price';

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
      let sortField = CREATING_DATE;
      let sortOrder = ASCENDING;

      if (
        sortValue === SELECTED_OPTIONS_KEYS.OLD_TO_NEW ||
        sortValue === SELECTED_OPTIONS_KEYS.CHEAP_TO_EXPENSIVE
      ) {
        sortOrder = ASCENDING;
      } else {
        sortOrder = DESCENDING;
      }

      if (
        sortValue === SELECTED_OPTIONS_KEYS.OLD_TO_NEW ||
        sortValue === SELECTED_OPTIONS_KEYS.NEW_TO_OLD
      ) {
        sortField = CREATING_DATE;
      } else {
        sortField = PRICE;
      }

      this.getProductsList({ sortField, sortOrder });
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
