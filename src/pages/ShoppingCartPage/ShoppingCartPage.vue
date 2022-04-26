<template>
  <div class="shopping-cart-page__wrapper page-container">
    <div>
      <empty-cart-popup
        v-if="isPopupVisible"
        @close="onClickTogglePopup"
        @clear-cart="onClickClearShoppingCart"
      />
    </div>

    <h1 class="shopping-cart-page__title">Cart</h1>

    <div v-if="isCartEmpty" class="cart-empty-container">
      <p class="cart-empty-container__message">
        No one product has been added to the card yet : (
        <br />
        <base-button-router path="/products">
          Start searching
        </base-button-router>
      </p>
    </div>

    <div v-else>
      <empty-cart-button
        class="shopping-cart-page__empty-cart-button"
        :disabled="isDisabled"
        @show-popup="onClickTogglePopup"
      />

      <shopping-cart-list
        class="shopping-cart-page__product-list-container"
        :products-in-cart="productsInCart"
        :total-price="totalPrice"
      />
      <base-text-filled-button class="shopping-cart-page__checkout-button">
        <base-button-router class="checkout_button__router" path="checkout"
          >BUY NOW</base-button-router
        >
      </base-text-filled-button>
    </div>
  </div>
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
import EmptyCartButton from '@/components/EmptyCartButton/EmptyCartButton';
import EmptyCartPopup from '@/components/EmptyCartPopup/EmptyCartPopup';
import { mapGetters, mapActions } from 'vuex';
import { BaseButtonRouter, BaseTextFilledButton } from '@/base_components';

export default {
  name: 'ShoppingCartPage',

  components: {
    BaseButtonRouter,
    ShoppingCartList,
    EmptyCartButton,
    EmptyCartPopup,
    BaseTextFilledButton
  },

  data() {
    return {
      isPopupVisible: false,
      isDisabled: false
    };
  },

  computed: {
    ...mapGetters('ShoppingCartModule', ['productsInCart', 'totalPrice']),

    isCartEmpty() {
      return this.productsInCart.length === 0;
    }
  },

  methods: {
    ...mapActions('ShoppingCartModule', ['clearCart']),

    onClickTogglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },

    onClickClearShoppingCart() {
      this.clearCart();
      this.isPopupVisible = false;
      this.isDisabled = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.shopping-cart-page {
  &__wrapper {
    position: relative;
  }

  &__empty-cart-button {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  &__title {
    color: $font-color-subtitle;
    font-weight: normal;
    align-self: flex-start;
    margin-bottom: 25px;
  }

  &__checkout-button {
    position: absolute;
    right: 20px;
    bottom: 60px;

    .checkout_button__router {
      text-decoration: none;
      color: $white;
      &:hover {
        color: $white;
      }
    }
  }
}

.cart-empty-container {
  display: flex;
  flex-direction: column;

  &__message {
    font-size: $font-size-subtitle;
    color: $font-color-subtitle;

    .base-button-router {
      color: $primary;

      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
