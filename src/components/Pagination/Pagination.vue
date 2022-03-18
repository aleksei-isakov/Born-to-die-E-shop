<template>
  <div class="pagination__wrapper">
    <v-pagination
      v-model="page"
      class="pagination"
      :length="paginationLength"
      circle
      :total-visible="totalVisible"
      @input="getNumberOfPage(page)"
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
    ...mapGetters('PlpPageModule', ['productsQuantity']),

    getPaginationLength() {
      return Math.ceil(this.productsQuantity / this.totalVisible);
    }
  },

  mounted() {
    this.getNumberOfPage(this.page);
  },

  methods: {
    ...mapActions('PlpPageModule', ['getNumberOfPage'])
  }
};
</script>

<style scoped>
.pagination__wrapper {
  padding-bottom: 20px;
}
</style>
