<template>
  <div class="shopping-cart-page__wrapper page-container">
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
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
import EmptyCartButton from '@/components/EmptyCartButton/EmptyCartButton';
import EmptyCartPopup from '@/components/EmptyCartPopup/EmptyCartPopup';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShoppingCartPage',

  components: { ShoppingCartList, EmptyCartButton, EmptyCartPopup },

  data() {
    return {
      isPopupVisible: false,
      isDisabled: false
    };
  },

  computed: {
    ...mapGetters('ShoppingCartModule', ['productsInCart', 'totalPrice'])
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
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    color: $font-color-subtitle;
    font-weight: normal;
  }
}
</style>
