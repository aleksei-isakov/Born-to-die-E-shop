<template>
  <div class="products-list">
    <RecentlyAdded text="Recently added" />
    <ul class="products-list__items">
      <ProductItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :image="product.image"
        :price="product.price"
        :description="product.description"
      />
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import RecentlyAdded from './RecentlyAdded.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsList',

  components: {
    ProductItem,
    RecentlyAdded
  },

  computed: mapGetters(['PRODUCTS']),

  methods: mapActions(['GET_PRODUCTS_FROM_API']),

  async mounted() {
    this.GET_PRODUCTS_FROM_API();
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.products-list {
  margin-top: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
}
.products-list__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
</style>
