<template>
  <div class="pagination__wrapper">
    <v-pagination
      v-model="page"
      class="pagination"
      :length="paginationLength"
      circle
      :total-visible="9"
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
    page: 1
  }),

  computed: {
    ...mapGetters('PlpPageModule', ['products', 'productsQuantity']),
    getPaginationLength() {
      return Math.ceil(this.productsQuantity / 9);
    }
  },

  watch: {
    page: function () {
      this.getProducts(this.page);
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
