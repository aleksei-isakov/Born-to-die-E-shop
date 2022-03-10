<template>
  <div class="popup-wrapper">
    <div class="popup-text">
      <div class="icon">
        <i
          class="md-icon md-icon-font md-theme-default close-popup"
          @click="onClickClosePopup"
          >close</i
        >
      </div>
      <span>
        Are you sure you want to remove all the products from the cart?</span
      >
    </div>
    <div class="buttons-wrapper">
      <base-text-filled-button
        class="delete-all-products"
        color="white"
        @click="onClickClearShoppingCart"
      >
        Yes</base-text-filled-button
      >
      <base-text-filled-button
        class="close-popup"
        color="blue"
        @click="onClickClosePopup"
        >No</base-text-filled-button
      >
    </div>
  </div>
</template>

<script>
//import { EmptyCartButton } from '../EmptyCartButton/EmptyCartButton.vue';
import BaseTextFilledButton from '@/base_components/BaseTextButtons/BaseTextFilledButton';
export default {
  name: 'EmptyCartPopup',

  components: { BaseTextFilledButton },

  methods: {
    onClickClosePopup() {
      this.$emit('onClickClosePopup');
    },
    onClickClearShoppingCart() {
      this.$emit('onClickClearShoppingCart');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';
.popup-wrapper {
  font-size: $font-size-basic;
  display: flex;
  padding: 15px;
  position: absolute;
  background: $background;
  box-shadow: $shadow;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  flex-direction: column;
}

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.base-text-filled-button {
  margin: 5px;
}

.icon {
  display: flex;
  justify-content: flex-end;
}
</style>
