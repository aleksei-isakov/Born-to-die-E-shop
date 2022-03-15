<template>
  <base-text-border-button
    color="custom-grey"
    class="empty-cart-button"
    @click="onClickShowPopup"
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
    onClickShowPopup() {
      this.$emit('show-popup');
    }
  }
};
</script>
