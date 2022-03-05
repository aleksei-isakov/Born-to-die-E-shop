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
    totalVisible: 9
  }),

  computed: {
    ...mapGetters('PlpPageModule', ['products', 'productsQuantity']),

    getPaginationLength() {
      return Math.ceil(this.productsQuantity / this.totalVisible);
    }
  },

  watch: {
    page: function () {
      this.getProducts({ _page: this.page, _limit: this.totalVisible });
    }
  },

  methods: {
    ...mapActions('PlpPageModule', ['getProducts'])
  }
};
</script>

<style scoped>
.pagination__wrapper {
  padding-bottom: 20px;
}
</style>
