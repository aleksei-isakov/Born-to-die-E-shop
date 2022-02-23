<template>
  <div class="products-list">
    <RecentlyAdded text="Recently added" />
    <ul class="products-list__items">
      <ProductItem
        v-for="product in products"
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

export default {
  name: 'ProductsList',

  components: {
    ProductItem,
    RecentlyAdded
  },

  props: {
    products: {
      type: Array,
      default: () => [],
      required: true
    }
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
