<template>
  <div class="checkout-page__wrapper page-container">
    <router-view />
    <shopping-cart-list
      class="checkout-page__product-list-container"
      :products-in-cart="checkedProductsInCart"
      :total-price="totalPrice"
    />
  </div>
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',

  components: { ShoppingCartList },

  computed: {
    ...mapGetters('ShoppingCartModule', ['totalPrice', 'checkedProductsInCart'])
  }
};
</script>
