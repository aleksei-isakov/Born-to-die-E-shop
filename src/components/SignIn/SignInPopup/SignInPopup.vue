<template>
  <md-dialog
    :md-active.sync="isPopupOpenedData"
    :md-fullscreen="false"
    @md-clicked-outside="onClickClosePopup"
  >
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
      <md-tab md-label="Sign In">
        <SignInForm @sign-in="signIn" />
      </md-tab>
      <md-tab md-label="Sign Up">
        <SignUpForm @sign-up="signUp" />
      </md-tab>
    </md-tabs>
  </md-dialog>
</template>

<script>
import { SignInForm, SignUpForm } from '../Forms';

export default {
  name: 'SignInPopup',

  components: {
    SignInForm,
    SignUpForm
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

  props: {
    isPopupOpened: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  methods: {
    onClickClosePopup() {
      this.$emit('on-click-close-popup');
    },

    signIn() {
      this.$emit('sign-in');
      this.onClickClosePopup();
    },

    signUp() {
      this.$emit('sign-up');
      this.onClickClosePopup();
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
</style>

<style lang="scss">
.md-tabs-navigation .md-ripple {
  padding: 0 40px;
}

@media (max-width: 768px) {
  .md-tabs-navigation .md-ripple {
    padding: 0 20px;
  }
}
</style>
