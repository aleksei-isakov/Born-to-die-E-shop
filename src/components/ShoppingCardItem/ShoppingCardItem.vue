<template>
  <div class="cart-item__wrapper">
    <img :src="getImage" class="cart-item__img" />
    <div class="cart-item__name">{{ name }}</div>
    <div class="cart-item__price">{{ getPrice }}</div>
    <quantity-counter
      :quantity="quantity"
      @increase="increaseProductQuantity(id)"
      @decrease="decreaseProductQuantity(id)"
    />
    <shopping-cart-trash-icon @delete-item="deleteFromCart(id)" />
  </div>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import QuantityCounter from '@/components/ShoppingCardItem/QuantityCounter';
import ShoppingCartTrashIcon from '@/components/ShoppingCartTrashIcon/ShoppingCartTrashIcon.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ShoppingCardItem',

  components: { QuantityCounter, ShoppingCartTrashIcon },

  props: {
    images: {
      type: Array,
      default: () => []
    },

    id: {
      type: String,
      required: true,
      default: ''
    },

    name: {
      type: String,
      required: true,
      default: ''
    },

    quantity: {
      type: Number,
      required: true,
      default: 1
    },

    price: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    getImage() {
      if (this.images && this.images.length) {
        return this.images[0];
      }

      return defaultImage;
    },

    getPrice() {
      return `${this.price} $`;
    }
  },

  methods: {
    ...mapActions('ShoppingCartModule', [
      'increaseProductQuantity',
      'decreaseProductQuantity',
      'deleteFromCart'
    ])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-item__wrapper {
  width: 70%;
  display: inline-flex;
  color: $font-color-text;
  max-width: 800px;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  border: 1px solid #e4e4e4ff;
  box-shadow: 0 3px 2px -2px gray;
  padding: 10px;
}

.cart-item__img {
  align-content: flex-start;
  max-width: 130px;
}

.cart-item__name {
  margin-right: 10px;
}

.cart-item__price {
  font-size: 1.5rem;
  color: $font-color-subtitle;
}

.cart-item__delete-button {
  cursor: pointer;
}

@media screen and (max-width: $tablet-size) {
  .cart-item__wrapper {
    width: 99%;
    padding: 10px;
  }

  .cart-item__price {
    font-size: 1.3rem;
    color: $font-color-subtitle;
  }

  .cart-item__img {
    max-width: 100px;
  }
}
</style>
