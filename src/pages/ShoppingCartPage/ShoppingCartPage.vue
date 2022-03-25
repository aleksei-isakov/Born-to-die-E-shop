<template>
  <div class="shopping-cart-page__wrapper">
    <empty-cart-popup
      v-if="isPopupVisible"
      @close="onClickTogglePopup"
      @clear-cart="onClickClearShoppingCart"
    />
    <div class="page-path__wrapper">
      <div class="page-path">Home / Cart</div>
    </div>
    <div class="page-name__wrapper">
      <div class="page-name">
        <h1>Cart</h1>
        <empty-cart-button
          :disabled="isDisabled"
          @show-popup="onClickTogglePopup"
        />
      </div>
    </div>
    <shopping-Cart-list
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

h1 {
  color: $font-color-subtitle;
  font-weight: normal;
}

.page-name__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.page-name {
  color: $font-color-subtitle;
  display: flex;
  width: 70%;
  max-width: 800px;
  justify-content: space-between;
}

.page-path__wrapper {
  display: flex;
  justify-content: center;
}

.page-path {
  display: flex;
  width: 70%;
  max-width: 800px;
  color: $font-color-subtitle;
  margin-top: 10px;
  justify-content: flex-start;
}

@media screen and (max-width: $tablet-size) {
  .page-name__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .page-name {
    color: $font-color-subtitle;
    display: flex;
    max-width: 800px;
    justify-content: space-between;
    align-items: center;
  }

  .page-path__wrapper {
    display: flex;
    justify-content: center;
  }

  .page-path {
    display: flex;
    width: 70%;
    max-width: 800px;
    color: $font-color-subtitle;
    margin-top: 10px;
    justify-content: flex-start;
  }
}
</style>
