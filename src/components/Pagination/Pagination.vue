<template>
  <div class="pagination__wrapper">
    <v-pagination
      v-model="page"
      class="pagination"
      :length="paginationLength"
      circle
      :total-visible="totalVisible"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';

export default {
  name: 'Pagination',

  props: {
    paginationLength: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    page: 1,
    totalVisible: DEFAULT_ITEMS_PER_PAGE
  }),

  computed: {
    ...mapGetters('PlpPageModule', [
      'products',
      'productsQuantity',
      'changedCategory',
      'sortField',
      'sortOrder'
    ]),

    getPaginationLength() {
      return Math.ceil(this.productsQuantity / this.totalVisible);
    }
  },

  watch: {
    async page() {
      this.getNumberOfPage(this.page);
    }
  },

  mounted() {
    this.getNumberOfPage(this.page);
  },

  methods: {
    ...mapActions('PlpPageModule', ['getProductsList', 'getNumberOfPage'])
  }
};
</script>

<style scoped>
.pagination__wrapper {
  padding-bottom: 20px;
}
</style>
