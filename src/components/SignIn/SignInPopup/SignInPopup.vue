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

<style lang="scss">
@import '@/scss/variables.scss';
.sign-in__close-button {
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 6;
}

.sign-in__submit-button {
  margin: 25px 0 0;
  padding: 10px 20px;
  background-color: #1876d1;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.01em;
  font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
  &.disabled {
    pointer-events: none;
    background-color: #cdcdcd;
    color: $font-color-subtitle;
  }
}

.md-dialog-container {
  width: 60%;
  max-width: 600px;
  border-radius: 5px;
}

.md-tabs {
  padding-top: 10px;
}

.md-tabs-navigation .md-ripple {
  padding: 0 50px;
}

.md-dialog-content:first-child {
  padding: 10px 40px 0;
}

.md-dialog-actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 40px 30px;
}

.md-icon.md-theme-default.md-icon-image svg {
  fill: $primary;
}

.md-button:not([disabled]):hover:before {
  background-color: $primary;
}

.md-checkbox {
  margin: 0;
}

@media (max-width: 768px) {
  .md-dialog-container {
    width: 80%;
    max-width: 500px;
  }

  .md-tabs-navigation .md-ripple {
    padding: 0 10px;
  }

  .md-dialog-content:first-child {
    padding: 0 20px;
  }

  .md-dialog-actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 20px 20px;
  }
}
</style>
