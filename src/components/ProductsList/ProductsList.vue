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
import products from './productsMock.json';

for (let product of products) {
  if (product.description) {
    product.description.created = new Date(product.description.created);
    product.description.updated = new Date(product.description.updated);
  }
}

export default {
  name: 'ProductsList',

  data() {
    return {
      products: products
    };
  },

  components: {
    ProductItem,
    RecentlyAdded
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
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
</style>
