<template>
  <base-text-border-button
    color="custom-grey"
    class="empty-cart-button"
    @click="onClickClearShoppingCart"
  >
    Empty cart
  </base-text-border-button>
</template>

<script>
import { BaseTextBorderButton } from '@/base_components/';

export default {
  name: 'EmptyCartButton',

  components: {
    BaseTextBorderButton
  },

  methods: {
    onClickClearShoppingCart() {
      this.$emit('on-click-clear-shopping-cart');
    }
  }
};
</script>
