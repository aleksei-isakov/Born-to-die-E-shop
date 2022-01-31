<template>
  <div>
    <RecentlyAdded></RecentlyAdded>
    <ul class="products-list">
      <ProductItem
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      ></ProductItem>
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import RecentlyAdded from './RecentlyAdded.vue';
export default {
  data() {
    return {
      products: [
        {
          description: {
            title: 'Soft Soap',
            field: 'HOME',
            created: new Date(),
            updated: new Date()
          },
          image: null,
          price: 800.7263828
        },
        {
          description: {
            title: 'Wooden Chair',
            field: 'HOME',
            created: new Date(),
            updated: new Date()
          },
          image: null,
          price: 800
        },
        {
          description: {
            title: 'Plastic Salad',
            field: 'GAMES',
            created: new Date(),
            updated: new Date()
          },
          image: null,
          price: 800
        }
      ]
    };
  },
  components: {
    ProductItem,
    RecentlyAdded
  }
};
</script>

<style>
.products-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
