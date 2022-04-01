<template>
  <div class="cart-item">
    <input
      type="checkbox"
      class="cart-item__checkbox"
      checked
      @change="toggleCartItemSelection($event.target.checked)"
    />
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
  </div>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import QuantityCounter from '@/components/ShoppingCartItem/QuantityCounter';
import ShoppingCartTrashIcon from '@/components/ShoppingCartTrashIcon/ShoppingCartTrashIcon.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ShoppingCartItem',

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
      'deleteFromCart',
      'checkCartItem',
      'uncheckCartItem'
    ]),

    toggleCartItemSelection(checked) {
      if (checked) {
        return this.checkCartItem(this.id);
      }

      return this.uncheckCartItem(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-item {
  display: flex;
  width: 100%;
  align-items: center;

  &__checkbox {
    margin-right: 20px;
  }

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    gap: 20px;
    min-width: 260px;
    padding: 10px;
    color: $font-color-text;
    border: 1px solid #e4e4e4ff;
    border-radius: 4px;
    box-shadow: $shadow;
  }

  &__img {
    align-content: flex-start;
    max-width: 130px;
  }

  &__price {
    min-width: fit-content;
    font-size: 1.5rem;
    color: $font-color-subtitle;
  }
}

@media screen and (max-width: $tablet-size) {
  .cart-item {
    &__price {
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width: $mobile-size) {
  .cart-item {
    &__wrapper {
      flex-direction: column;
      width: calc(100% - 40px);
      padding: 20px;
    }

    &__price {
      font-size: 1.3rem;
    }

    &__img {
      max-width: 200px;
    }
  }
}
</style>
