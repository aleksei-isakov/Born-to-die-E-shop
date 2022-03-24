<template>
  <div class="pagination__wrapper">
    <v-pagination
      v-model="page"
      class="pagination"
      :length="paginationLength"
      circle
      :total-visible="totalVisible"
      @input="setNumberOfPage(page)"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { DEFAULT_ITEMS_PER_PAGE } from '@/constants';
import { START_NUMBER_OF_PAGE } from '@/pages/PlpPage/helper';

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
    ...mapGetters('PlpPageModule', ['productsQuantity', 'numberOfPage']),

    getPaginationLength() {
      return Math.ceil(this.productsQuantity / this.totalVisible);
    }
  },

  watch: {
    numberOfPage() {
      if (this.numberOfPage === START_NUMBER_OF_PAGE) {
        this.page = START_NUMBER_OF_PAGE;
      }
    }
  },

  mounted() {
    this.setNumberOfPage(this.page);
  },

  methods: {
    ...mapActions('PlpPageModule', ['setNumberOfPage'])
  }
};
</script>

<style scoped>
.pagination__wrapper {
  padding-bottom: 20px;
}
</style>
