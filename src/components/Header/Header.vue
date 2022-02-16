<template>
  <div class="header-wrapper">
    <div class="header-content">
      <div class="block-wrapper">
        <div class="hamburger-display">
          <HamburgerIcon class="header-hamburger" />
        </div>
        <div class="header-logo">
          <BaseCustomIcon
            class="header-logo__icon"
            :icon="iconsPathLogo"
            :width="iconWidth"
          />
        </div>
        <BaseButtonRouter class="header-buttonRouter" path="/"
          >HOME</BaseButtonRouter
        >
        <BaseButtonRouter class="header-buttonRouter" path="/products"
          >PRODUCTS</BaseButtonRouter
        >
      </div>
      <div class="block-wrapper">
        <BaseCustomIcon
          :icon="iconsPathShop"
          :width="iconWidth"
          class="header-icon__cart"
        />
        <SignInBtn
          :is-sign-in="isSignIn"
          @on-click-show-sign-in-popup="onClickShowSignInPopup"
        />
        <SignInPopup
          :is-popup-opened="isPopupOpened"
          @on-validate-sign-in="signIn"
          @on-validate-sign-up="signUp"
          @on-click-close-popup="onClickCloseSignInPopup"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButtonRouter, BaseCustomIcon } from '@/base_components/';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.vue';
import { SignInBtn, SignInPopup } from '@/components/SignIn';
import Vue from 'vue';
import VueMaterial from 'vue-material';
Vue.use(VueMaterial);

export default {
  name: 'Header',

  components: {
    BaseButtonRouter,
    HamburgerIcon,
    SignInBtn,
    SignInPopup,
    BaseCustomIcon
  },

  data() {
    return {
      isPopupOpened: false,
      isSignIn: false,
      iconsPathShop: 'shopping_basket_white_24dp',
      iconsPathLogo: 'grade_white_24dp',
      iconWidth: '50px'
    };
  },

  methods: {
    onClickShowSignInPopup: function () {
      this.isPopupOpened = true;
    },

    onClickCloseSignInPopup: function () {
      this.isPopupOpened = false;
    },

    signIn() {
      this.isSignIn = true;
    },

    signUp() {
      this.isSignIn = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

.header-buttonRouter {
  font-size: $font-size-basic;
  color: white !important;
  background: $primary;
  box-shadow: none;
  border-width: 0px;
  padding: 10px;
}

.header-wrapper {
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  width: 100%;
  padding: 20px;
  z-index: 1;
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
}

.header-logo__icon {
  width: 40px;
  height: auto;
}

.header-icon__cart {
  width: 30px;
  height: auto;
}

.block-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.hamburger-display {
  display: none;
}

@media (max-width: $tablet-size) {
  .header-buttonRouter {
    display: none;
  }

  .hamburger-display {
    display: block;
  }
}
</style>
