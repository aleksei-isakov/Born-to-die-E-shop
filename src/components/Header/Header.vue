<template>
  <div class="header-wrapper">
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
        :isSignIn="isSignIn"
        @on-click-show-sign-in-popup="onClickShowSignInPopup"
      />
      <SignInPopup
        :isPopupOpened="isPopupOpened"
        @on-validate-sign-in="signIn"
        @on-validate-sign-up="signUp"
        @on-click-close-popup="onClickCloseSignInPopup"
      />
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

<style lang="scss">
@import '../../scss/variables.scss';

@media (min-width: 769px) {
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
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $primary;
    padding: 10px;
    position: sticky;
    width: 100%;
    left: 0;
    top: 0;
  }

  .header-logo__icon {
    width: 40px;
    height: auto;
    margin: 0 10px 0 20px;
  }

  .header-icon__cart {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  .block-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .hamburger-display {
    display: none;
  }
}

@media (max-width: 769px) {
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  .header-buttonRouter {
    display: none;
  }

  .header-wrapper {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $primary;
    padding: 10px;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }

  .header-logo__icon {
    width: 40px;
    height: auto;
    margin: 0 20px 0 20px;
  }

  .header-icon__cart {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  .block-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-button__signIn {
    border: 1px solid #fff;
    padding: 8px;
    border-radius: 5px;
    color: #fff;
  }

  .hamburger-display {
    display: block;
  }
}
</style>
