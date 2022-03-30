<template>
  <div class="shopping-cart-page__wrapper page-container">
    <div v-if="isCartEmpty" class="empty-cart-container">
      <h1 class="shopping-cart-page__title">Cart</h1>
      <p class="empty-cart-message">
        The cart is empty
        <br />
        You can find products
        <base-button-router path="/products"> here </base-button-router>
      </p>
    </div>

    <div v-else>
      <empty-cart-popup
        v-if="isPopupVisible"
        @close="onClickTogglePopup"
        @clear-cart="onClickClearShoppingCart"
      />

      <div class="shopping-cart-page__head">
        <h1 class="shopping-cart-page__title">Cart</h1>
        <empty-cart-button
          :disabled="isDisabled"
          @show-popup="onClickTogglePopup"
        />
      </div>

      <shopping-cart-list
        :products-in-cart="productsInCart"
        :total-price="totalPrice"
      />
    </div>
  </div>
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
import EmptyCartButton from '@/components/EmptyCartButton/EmptyCartButton';
import EmptyCartPopup from '@/components/EmptyCartPopup/EmptyCartPopup';
import { mapGetters, mapActions } from 'vuex';
import { BaseButtonRouter } from '@/base_components';

export default {
  name: 'ShoppingCartPage',

  components: {
    BaseButtonRouter,
    ShoppingCartList,
    EmptyCartButton,
    EmptyCartPopup
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

.empty-cart-message {
  font-size: $font-size-subtitle;
  color: $font-color-subtitle;
  margin: 50px;

  .base-button-router {
    color: $primary;
    &:hover {
      color: $primary;
    }
  }
}

.shopping-cart-page {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    color: $font-color-subtitle;
    font-weight: normal;
    align-self: flex-start;
  }
}

.empty-cart-container {
  display: flex;
  flex-direction: column;
}
</style>
