<template>
  <div
    v-if="isDialogVisible"
    class="dialog-wrapper"
    @click="onClickCloseDialog"
  >
    <div class="form-container" @click.stop>
      <div class="form-container__dialog-message">
        <p class="close-dialog-message">
          <slot></slot>
        </p>
      </div>
      <div class="form-container__button-placeholder">
        <base-text-filled-button
          color="custom-red"
          @click="onClickDeleteAddress"
        >
          Delete
        </base-text-filled-button>

        <base-text-filled-button @click="onClickCloseDialog">
          Cancel
        </base-text-filled-button>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components';

export default {
  name: 'AddressDeleteDialog',

  components: {
    BaseTextFilledButton
  },

  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClickCloseDialog() {
      this.$emit('onClickCloseDialog');
    },
    onClickDeleteAddress() {
      this.$emit('onClickCloseDialog');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-index-popup;
  background-color: rgba(0, 0, 0, 0.5);
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 150px;
  background-color: #e6e6e6;
  padding: 30px;
  &__button-placeholder {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__dialog-message {
    width: 100%;
    height: 100px;
  }
}

.close-dialog-message {
  margin-top: -10px;
  color: $font-color-subtitle;
  font-size: $font-size-basic;
}
</style>
