<template>
  <div class="cart-item">
    <input
      type="checkbox"
      class="cart-item__checkbox"
      checked
      @change="onChangeToggleCartItemSelection($event.target.checked)"
    />
    <div class="cart-item__wrapper">
      <img :src="getImage" class="cart-item__img" />
      <div class="cart-item__name">{{ name }}</div>
      <div :class="{ 'cart-item__discount': discountPercentage }">
        {{ getDiscountPercentage }}
      </div>
      <div class="cart-item__price-container">
        <div v-if="discountPercentage" class="cart-item__price">
          {{ priceWithDiscount | currency }}
        </div>
        <div
          class="cart-item__price"
          :class="{ 'cart-item__crossed': discountPercentage }"
        >
          {{ price | currency }}
        </div>
      </div>
      <quantity-counter
        :quantity="quantity"
        @increase="increaseProductQuantity(id)"
        @decrease="decreaseProductQuantity(id)"
      />
    </div>
    <shopping-cart-trash-icon
      class="cart-item__trash-icon"
      @delete-item="deleteFromCart(id)"
    />
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
    }
  },

  computed: {
    getImage() {
      if (this.images && this.images.length) {
        return this.images[0];
      }

      return defaultImage;
    },

    // getPrice() {
    //   return `${this.price} $`;
    // },

    // getPriceWithDiscount() {
    //   return `${this.priceWithDiscount.toFixed(1)} $`;
    // },

    getDiscountPercentage() {
      return this.discountPercentage > 0 ? `${this.discountPercentage}%` : '';
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

    onChangeToggleCartItemSelection(checked) {
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
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;

  &__checkbox {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  &__wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 0.5fr 1fr 1fr;
    flex-grow: 1;
    gap: 20px;
    min-width: 260px;
    padding: 10px 65px 10px 10px;
    color: $font-color-text;
    border: 1px solid #e4e4e4ff;
    border-radius: 4px;
    box-shadow: $shadow;
    background-color: $white;
  }

  &__name {
    text-align: left;
  }

  &__img {
    align-content: flex-start;
    max-width: 130px;
  }
  &__price-container {
    display: flex;
    align-items: center;
  }

  &__price {
    min-width: fit-content;
    font-size: $font-size-subtitle;
    color: $font-color-subtitle;
    text-align: left;
  }

  &__trash-icon {
    position: absolute;
    right: 20px;
  }

  &__crossed {
    text-decoration: line-through;
    color: $font-color-subtitle;
    font-size: 14px;
    margin-left: 10px;
  }

  &__discount {
    color: $white;
    background-color: #b61d1c;
    padding: 6px 16px;
    border-radius: 20px;
    width: fit-content;
  }
}

@media screen and (max-width: $tablet-size) {
  .cart-item {
    justify-content: center;

    &__wrapper {
      grid-template-columns: 1fr;
      justify-items: center;
      max-width: 360px;
      padding: 20px;
    }

    &__img {
      max-width: 100%;
    }

    &__trash-icon {
      position: static;
    }
  }
}
</style>
