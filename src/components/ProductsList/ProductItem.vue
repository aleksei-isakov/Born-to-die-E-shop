<template>
  <li :class="['product-item', { 'product-item_horizontal': isHorizontal }]">
    <base-button-router class="product-item__link" :path="path">
      <div class="product-item__image-block">
        <wishlist-heart-icon
          :key="isProductInWishlist"
          class="product-item__wishlist-heart"
          :is-checked="isProductInWishlist"
          @click.native.prevent="toggleInWishlist"
        />
        <img class="product-item__image" :src="getImage" alt="product image" />
      </div>
      <div :class="{ 'product-item__discount': discountPercentage }">
        {{ getDiscountPercentage }}
      </div>
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
        <product-price>
          <span v-if="discountPercentage">
            {{ priceWithDiscount | currency }}
          </span>
          <span :class="{ 'product-item__crossed': discountPercentage }">
            {{ price | currency }}
          </span>
        </product-price>
        <base-text-filled-button
          v-if="isProductNotInCart"
          class="product-item__add-btn"
          @click.native.prevent="addToCart(product)"
        >
          + ADD TO CART
        </base-text-filled-button>

        <quantity-counter
          v-else
          :quantity="productQuantity"
          @increase="increaseProductQuantity(id)"
          @decrease="decreaseProductQuantity(id)"
        >
        </quantity-counter>
      </div>
    </base-button-router>
  </li>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import ProductDescription from './ProductDescription.vue';
import ProductPrice from './ProductPrice.vue';
import QuantityCounter from '@/components/ShoppingCartItem/QuantityCounter';
import { BaseButtonRouter, BaseTextFilledButton } from '@/base_components/';
import { mapActions, mapGetters } from 'vuex';
import WishlistHeartIcon from '@/components/Wishlist/WishlistHeartIcon';

export default {
  name: 'ProductItem',

  components: {
    ProductDescription,
    ProductPrice,
    BaseButtonRouter,
    BaseTextFilledButton,
    QuantityCounter,
    WishlistHeartIcon
  },

  props: {
    product: {
      type: Object,
      required: true,
      default: () => {}
    },

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

    discountPercentage: {
      type: Number,
      required: true,
      default: 0
    },

    priceWithDiscount: {
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
    ...mapGetters('ShoppingCartModule', ['productsInCart']),
    ...mapGetters('PdpPageModule', ['productInfo']),
    ...mapGetters('WishlistModule', ['productsInWishlist']),

    getImage() {
      return this.image ? this.image : defaultImage;
    },

    path() {
      return `/products/${this.id}`;
    },

    productQuantity() {
      return this.productsInCart.find(
        (productInCart) => productInCart.id === this.product.id
      )?.quantity;
    },

    isProductNotInCart() {
      let productInCart = this.productsInCart.find(
        (productInCart) => productInCart.id === this.product.id
      );

      return !productInCart;
    },

    isProductInWishlist() {
      return this.productsInWishlist.some(({ id }) => id === this.product.id);
    },

    getDiscountPercentage() {
      return this.discountPercentage > 0 ? `${this.discountPercentage}%` : '';
    }
  },

  methods: {
    ...mapActions('ShoppingCartModule', [
      'addToCart',
      'increaseProductQuantity',
      'decreaseProductQuantity'
    ]),
    ...mapActions('WishlistModule', ['addToWishlist', 'deleteFromWishlist']),

    toggleInWishlist() {
      if (this.isProductInWishlist) {
        this.deleteFromWishlist(this.product.id);
      }

      return this.addToWishlist(this.product);
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
  background-color: $white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

  &__crossed {
    text-decoration: line-through;
    color: $font-color-subtitle;
    font-size: 14px;
    margin-left: 10px;
  }

  &__add-btn {
    position: relative;
    padding: 7px 10px;
    font-size: 0.8rem;
    margin: 0px;
  }

  &__discount {
    color: $white;
    background-color: #b61d1c;
    padding: 6px 16px;
    border-radius: 20px;
    position: absolute;
    bottom: 58%;
    left: 30px;
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

  &__image-block {
    position: relative;
  }

  &__wishlist-heart {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &__image {
    min-width: 150px;
    max-width: 320px;
    width: 100%;
    object-fit: cover;
  }

  &_horizontal {
    width: 100%;
    max-width: none;

    .product-item__link {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: $tablet-size) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }

    .product-item__image {
      max-width: 200px;
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
