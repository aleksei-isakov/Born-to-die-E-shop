<template>
  <li
    class="product-item"
    :class="{ 'product-item--horizontal': isHorizontal }"
  >
    <img class="product-item__image" :src="getImage" alt="product image" />
    <ProductDescription
      v-if="description"
      :title="description.title"
      :field="description.field"
      :created="description.created"
      :updated="description.updated"
    />
    <div
      class="product-item__price-container"
      :class="{ 'product-item__price-container--revert': isHorizontal }"
    >
      <ProductPrice>{{ getPrice }} $</ProductPrice>
      <BaseButton
        class="md-button md-raised md-primary md-theme-default add-btn"
      >
        + ADD TO CART
      </BaseButton>
    </div>
  </li>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import ProductDescription from './ProductDescription.vue';
import ProductPrice from './ProductPrice.vue';
import { BaseButton } from '@/base_components';

export default {
  name: 'ProductItem',

  components: {
    ProductDescription,
    ProductPrice,
    BaseButton
  },

  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },

    description: {
      type: Object,
      required: false,
      default: null
    },

    isHorizontal: {
      type: Boolean,
      required: true,
      default: false
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
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-item {
  min-width: 250px;
  height: fit-content;
  border-radius: 10px;
  list-style: none;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 20vw;
  max-width: 300px;

  &__image {
    width: 170px;
    min-width: 150px;
  }

  &--horizontal {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: none;

    @media screen and (max-width: $tablet-size) {
      flex-direction: column;
      width: 20vw;
    }
  }

  &__price-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .add-btn {
      padding: 0 10px;
      font-size: 0.8rem;
    }

    &--revert {
      flex-direction: column;
      height: 100px;

      @media screen and (max-width: $tablet-size) {
        flex-direction: row;
      }
    }
  }
}
</style>
