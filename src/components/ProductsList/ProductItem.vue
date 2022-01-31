<template>
  <li class="product-item">
    <img
      class="product-image"
      v-if="product.image"
      :src="product.image"
      alt="product image"
    />
    <img class="product-image" v-else :src="defaultImage" alt="product image" />
    <ProductDescription :description="product.description">
    </ProductDescription>
    <div class="price-container">
      <ProductPrice>{{ product.price.toFixed(1) }} $</ProductPrice>
      <button class="md-button md-raised md-primary md-theme-default">
        + ADD TO CART
      </button>
    </div>
  </li>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import ProductDescription from './ProductDescription.vue';
import ProductPrice from './ProductPrice.vue';
export default {
  props: ['product'],
  data() {
    return {
      defaultImage: defaultImage
    };
  },
  components: {
    ProductDescription,
    ProductPrice
  }
};
</script>

<style>
.product-item {
  width: 20vw;
  min-width: 250px;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.price-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.product-image {
  width: 80%;
}
</style>
