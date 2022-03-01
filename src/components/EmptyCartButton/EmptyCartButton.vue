<template>
  <BaseTextBorderButton
    class="empty-cart-button"
    @click="onClickClearShoppingCart"
  >
    Empty cart
  </BaseTextBorderButton>
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

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.empty-cart-button {
  color: $button-disabled-color !important;
  border-color: $button-disabled-color !important;
}
</style>
