<template>
  <div class="header-wrapper">
    <div class="block-wrapper">
      <div class="hamburger-display">
        <HamburgerIcon class="header-hamburger" />
      </div>
      <div class="header-logo">
        <img
          class="header-logo__icon"
          src="../../assets/Icons/grade_white_24dp.svg"
        />
      </div>
      <BaseButtonRouter class="header-button__home" path="/"
        >HOME</BaseButtonRouter
      >
      <BaseButtonRouter class="header-button__products" path="/products"
        >PRODUCTS</BaseButtonRouter
      >
    </div>
    <div class="block-wrapper">
      <img
        class="header-icon__cart"
        src="../../assets/Icons/shopping_basket_white_24dp.svg"
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
import { SignInBtn, SignInPopup, BaseButtonRouter } from '@/base_components';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.vue';

export default {
  name: 'Header',

  components: {
    BaseButtonRouter,
    HamburgerIcon,
    SignInBtn,
    SignInPopup
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
  },

  data() {
    return {
      isPopupOpened: false,
      isSignIn: false
    };
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

  .header-button__home {
    font-size: $font-size-basic;
    color: white;
    background: $primary;
    box-shadow: none;
    border-width: 0px;
    padding: 10px;
  }

  .header-button__products {
    font-size: $font-size-basic;
    color: white;
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
  .header-button__products {
    display: none;
  }

  .header-button__home {
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
