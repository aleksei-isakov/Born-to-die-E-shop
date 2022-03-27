<template>
  <div class="header-wrapper">
    <div class="header-content">
      <div class="block-wrapper">
        <div class="hamburger-display">
          <hamburger-icon class="header-hamburger" />
        </div>
        <div class="header-logo">
          <base-custom-icon
            class="header-logo__icon"
            :icon="iconsPathLogo"
            :width="iconWidth"
          />
        </div>
        <base-button-router class="header-buttonRouter" path="/"
          >HOME</base-button-router
        >
        <base-button-router class="header-buttonRouter" path="/products"
          >PRODUCTS</base-button-router
        >
      </div>
      <div class="block-wrapper">
        <shopping-cart-icon :width="iconWidth" class="header-icon__cart" />
        <div v-click-outside="onHideMenu" class="header-sideMenuPopup__wrapper">
          <sign-in-btn
            @change-menu-visibility="onClickChangeMenuVisibility"
            @on-click-show-sign-in-popup="onClickShowSignInPopup"
          />

          <side-menu-popup
            v-if="isMenuVisible"
            class="header-sideMenuPopup"
            @close="onHideMenu"
          />
        </div>
        <sign-in-popup
          :is-popup-opened="isPopupOpened"
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
import ShoppingCartIcon from '@/components/ShoppingCartIcon/ShoppingCartIcon';
import SideMenuPopup from '@/components/SideMenuSection/SideMenuPopup.vue';

Vue.use(VueMaterial);

export default {
  name: 'SiteHeader',

  components: {
    ShoppingCartIcon,
    BaseButtonRouter,
    HamburgerIcon,
    SignInBtn,
    SignInPopup,
    BaseCustomIcon,
    SideMenuPopup
  },

  data() {
    return {
      isPopupOpened: false,
      iconsPathShop: 'shopping_basket_white_24dp',
      iconsPathLogo: 'grade_white_24dp',
      iconWidth: '50px',
      isMenuVisible: false
    };
  },

  methods: {
    onClickShowSignInPopup() {
      this.isPopupOpened = true;
    },

    onClickCloseSignInPopup() {
      this.isPopupOpened = false;
    },

    onClickChangeMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible;
    },

    onHideMenu() {
      this.isMenuVisible = false;
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
  z-index: $z-index-header;
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  width: 100%;
  max-height: 60px;
  padding: 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 80%;
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

.header-sideMenuPopup {
  position: absolute;

  &__wrapper {
    position: relative;
  }
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
