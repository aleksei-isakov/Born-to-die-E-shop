<template>
  <div class="popup-wrapper">
    <div class="popup-body">
      <div class="popup-content">
        <div class="popup-icon__close">
          <i
            class="md-icon md-icon-font md-theme-default close-popup"
            @click="onClickClosePopup"
            >close</i
          >
        </div>
        <div class="popup-text">
          Are you sure you want to remove all the products from the cart?
        </div>
        <div class="popup-buttons__wrapper">
          <base-text-filled-button
            class="popup-btn__delete"
            @click="onClickClearShoppingCart"
          >
            Yes</base-text-filled-button
          >
          <base-text-border-button
            class="popup-btn_close"
            @click="onClickClosePopup"
            >No</base-text-border-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextFilledButton from '@/base_components/BaseTextButtons/BaseTextFilledButton';
import BaseTextBorderButton from '@/base_components/BaseTextButtons/BaseTextBorderButton';

export default {
  name: 'EmptyCartPopup',

  components: { BaseTextFilledButton, BaseTextBorderButton },

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
  position: fixed;
  background: #6c6c6c6b;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.popup-body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  flex-direction: column;
}

.popup-content {
  background: #fff;
  color: $font-color-title;
  max-width: 400px;
  padding: 30px;
  font-size: $font-size-basic;
  box-shadow: $shadow;
  position: relative;
  border: 1px solid #fff;
  border-radius: 5px;
}

.popup-icon__close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.popup-text {
  margin: 30px 20px;
}

.popup-buttons__wrapper {
  display: flex;
  justify-content: center;
  margin: 30px 20px 20px 20px;
}

.popup-btn__delete,
.popup-btn_close {
  width: 120px;
  margin: 0 20px;
}
</style>
