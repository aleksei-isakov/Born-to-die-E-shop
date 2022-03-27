<template>
  <li :class="['product-item', { 'product-item_horizontal': isHorizontal }]">
    <base-button-router class="product-item__link" :path="path">
      <img class="product-item__image" :src="getImage" alt="product image" />
      <product-description
        :title="title"
        :category="category"
        :created="created"
        :updated="updated"
        :rating="rating"
        :is-horizontal="isHorizontal"
      />
      <div
        :class="[
          { 'product-item__price-container_revert': isHorizontal },
          'product-item__price-container'
        ]"
      >
        <product-price>{{ getPrice }}</product-price>
        <base-text-filled-button class="product-item__add-btn">
          + ADD TO CART
        </base-text-filled-button>
      </div>
    </base-button-router>
  </li>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import ProductDescription from './ProductDescription.vue';
import ProductPrice from './ProductPrice.vue';
import { BaseButtonRouter, BaseTextFilledButton } from '@/base_components/';

export default {
  name: 'ProductItem',

  components: {
    ProductDescription,
    ProductPrice,
    BaseButtonRouter,
    BaseTextFilledButton
  },

  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      required: true,
      default: 0
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

    rating: {
      type: Number,
      required: true,
      default: 0
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
      return `${this.price.toFixed(1)} $`;
    },

    path() {
      return `/products/${this.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.product-item {
  min-width: 250px;
  border-radius: 10px;
  list-style: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 20vw;
  max-width: 300px;

  &__add-btn {
    padding: 7px 10px;
    font-size: 0.8rem;
    margin: 0px;
  }

  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;

    &:hover {
      text-decoration: none;
    }
  }

  &__image {
    min-width: 150px;
    max-width: 250px;
    width: 100%;
    object-fit: cover;
  }

  &_horizontal {
    width: 100%;
    max-width: none;

    @media screen and (max-width: $tablet-size) {
      width: 20vw;
    }

    .product-item__link {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: $tablet-size) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  &__price-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &_revert {
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      width: fit-content;
      min-width: 120px;

      @media screen and (max-width: $tablet-size) {
        flex-direction: row;
        width: 100%;
      }
    }
  }
}
</style>
