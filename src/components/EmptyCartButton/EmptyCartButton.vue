<template>
  <BaseTextBorderButton
    class="empty-cart-button"
    disabled
    @click="onClickEmitEvent"
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
  }
};
</script>

<style lang="scss" scoped>
.empty-cart-button {
}
</style>
