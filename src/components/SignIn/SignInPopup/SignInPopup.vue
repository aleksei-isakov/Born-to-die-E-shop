<template>
  <md-dialog
    :md-active.sync="isPopupOpenedData"
    :md-fullscreen="false"
    @md-clicked-outside="onClickClosePopup"
  >
    <md-dialog-content class="sign-in__popup-content">
      <md-button
        class="md-icon-button md-primary sign-in__close-button"
        @click="onClickClosePopup"
      >
        <md-icon>close</md-icon>
      </md-button>
      <md-tabs
        class="md-content md-elevation-3 md-theme-default"
        md-dynamic-height
        md-alignment="centered"
      >
        <md-tab class="sign-in__popup-tab" md-label="Sign In">
          <SignInForm @on-click-close-popup="onClickClosePopup" />
        </md-tab>
        <md-tab class="sign-in__popup-tab" md-label="Sign Up">
          <SignUpForm @on-click-close-popup="onClickClosePopup" />
        </md-tab>
      </md-tabs>
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import { SignInForm, SignUpForm } from '../Forms/';

export default {
  name: 'SignInPopup',

  components: {
    SignInForm,
    SignUpForm
  },

  props: {
    isPopupOpened: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data() {
    return {
      isPopupOpenedData: this.isPopupOpened
    };
  },

  watch: {
    isPopupOpened(val) {
      this.isPopupOpenedData = val;
    }
  },

  methods: {
    onClickClosePopup() {
      this.$emit('on-click-close-popup');
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-in__close-button {
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 6;
}

.sign-in__popup-content {
  padding: 0 !important;
}

.sign-in__popup-tab {
  padding: 15px 50px;
}
</style>

<style lang="scss">
.md-dialog-container {
  border-radius: 5px !important;
}
</style>
