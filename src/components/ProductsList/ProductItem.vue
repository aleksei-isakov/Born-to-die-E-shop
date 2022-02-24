<template>
  <li :class="['product-item', { 'product-item_horizontal': isHorizontal }]">
    <img class="product-item__image" :src="getImage" alt="product image" />
    <ProductDescription
      :title="title"
      :category="category"
      :created="created"
      :updated="updated"
      :is-horizontal="isHorizontal"
    />
    <div
      :class="[
        { 'product-item__price-container_revert': isHorizontal },
        'product-item__price-container'
      ]"
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
      default: ''
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },

    description: {
      type: String,
      required: false,
      default: ''
    },

    created: {
      type: String,
      required: true,
      default: ''
    },

    updated: {
      type: String,
      required: true,
      default: ''
    },

    title: {
      type: String,
      required: false,
      default: ''
    },

    category: {
      type: String,
      required: false,
      default: ''
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
      return this.image ? this.image : defaultImage;
    },

    getPrice() {
      return this.price.toFixed(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.product-item {
  min-width: 250px;
  height: fit-content;
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 20vw;
  max-width: 300px;
  height: 100%;

  &__image {
    min-width: 150px;
    max-width: 250px;
    width: 100%;
  }

  &_horizontal {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: none;

    @media screen and (max-width: $tablet-size) {
      flex-direction: column;
      width: 20vw;
      justify-content: space-between;
      align-items: center;
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
      margin: 0px;
    }

    &_revert {
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      width: fit-content;

      @media screen and (max-width: $tablet-size) {
        flex-direction: row;
        width: 100%;
      }
    }
  }
}
</style>
