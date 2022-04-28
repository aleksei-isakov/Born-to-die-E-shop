<template>
  <div class="checkout-page__wrapper page-container">
    <div class="cart-list">
      <shopping-cart-item
        v-for="cartItem in checkedProductsInCart"
        :id="cartItem.id"
        :key="cartItem.id"
        :name="cartItem.name"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        :discount-percentage="cartItem.discountPercentage"
        :price-with-discount="cartItem.priceWithDiscount"
        :images="cartItem.images"
        :is-checked="cartItem.checked"
      />
      <div class="cart-list__total-price">{{ totalPrice | currency }}</div>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from '@/components/ShoppingCartItem/ShoppingCartItem';
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',

  components: { ShoppingCartItem },

  computed: {
    ...mapGetters('ShoppingCartModule', ['totalPrice', 'checkedProductsInCart'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__total-price {
    margin-top: 40px;
    text-align: left;
    color: $font-color-subtitle;
    font-size: 1.1rem;
  }
}
</style>
