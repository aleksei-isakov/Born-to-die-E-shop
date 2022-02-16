<template>
  <li class="product-item">
    <img class="product-item__image" :src="getImage" alt="product image" />
    <ProductDescription
      v-if="description"
      :title="description.title"
      :field="description.field"
      :created="description.created"
      :updated="description.updated"
    />
    <div class="product-item__price-container">
      <ProductPrice>{{ getPrice }} $</ProductPrice>
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
  name: 'ProductItem',

  props: {
    image: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },

    description: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      defaultImage: defaultImage
    };
  },

  computed: {
    getImage() {
      return this.image ? product.image : defaultImage;
    },

    getPrice() {
      return this.price.toFixed(1);
    }
  },

  components: {
    ProductDescription,
    ProductPrice
  }
};
</script>

<style scoped>
.product-item {
  width: 20vw;
  min-width: 250px;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 30px 55px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.product-item__price-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.product-item__image {
  width: 80%;
}
</style>
