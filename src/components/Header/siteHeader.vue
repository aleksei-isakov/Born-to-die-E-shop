<template>
  <div class="header__wrapper">
    <div class="container">
      <div class="header__block">
        <mobile-menu-button @show="onClickShowMobileMenu" />
        <mobile-menu-panel
          :is-visible="isMobileMenuPanelVisible"
          @close="onClickCloseMobileMenu"
        />
        <base-button-router path="/">
          <base-custom-icon class="header__logo" :icon="iconsPathLogo" />
        </base-button-router>
        <base-button-router class="header__router-link" path="/">
          HOME
        </base-button-router>
        <base-button-router class="header__router-link" path="/products">
          PRODUCTS
        </base-button-router>
      </div>
      <div class="header__block">
        <shopping-cart-icon class="header__cart-icon" />
        <div
          v-click-outside="onClickHideProfileMenu"
          class="profile-popup__wrapper"
        >
          <sign-in-btn
            @change-menu-visibility="onClickChangeProfileMenuVisibility"
            @show-sign-in-popup="onClickShowSignInPopup"
          />

          <side-menu-popup
            v-if="isProfileMenuVisible"
            class="profile-popup"
            @close="onClickHideProfileMenu"
          />
        </div>
        <sign-in-popup
          :is-popup-opened="isPopupOpened"
          @close="onClickCloseSignInPopup"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButtonRouter, BaseCustomIcon } from '@/base_components/';
import { SignInBtn, SignInPopup } from '@/components/SignIn';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import ShoppingCartIcon from '@/components/ShoppingCartIcon/ShoppingCartIcon';
import SideMenuPopup from '@/components/SideMenuSection/SideMenuPopup.vue';
import { MobileMenuButton, MobileMenuPanel } from '@/components/MobileMenu';

Vue.use(VueMaterial);

export default {
  name: 'SiteHeader',

  components: {
    ShoppingCartIcon,
    BaseButtonRouter,
    SignInBtn,
    SignInPopup,
    BaseCustomIcon,
    SideMenuPopup,
    MobileMenuButton,
    MobileMenuPanel
  },

  data() {
    return {
      isPopupOpened: false,
      iconsPathLogo: 'logo',
      isProfileMenuVisible: false,
      isMobileMenuPanelVisible: false
    };
  },

  methods: {
    onClickShowSignInPopup() {
      this.isPopupOpened = true;
    },

    onClickCloseSignInPopup() {
      this.isPopupOpened = false;
    },

    onClickChangeProfileMenuVisibility() {
      this.isProfileMenuVisible = !this.isProfileMenuVisible;
    },

    onClickHideProfileMenu() {
      this.isProfileMenuVisible = false;
    },

    onClickShowMobileMenu() {
      this.isMobileMenuPanelVisible = true;
    },

    onClickCloseMobileMenu() {
      this.isMobileMenuPanelVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.header {
  &__wrapper {
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary;
    width: 100%;
    height: 70px;
    z-index: $z-index-header;
  }
}

.header__router-link {
  padding: 0 10px;
  font-size: $font-size-basic;
  line-height: $font-size-basic;
  background: $primary;
  box-shadow: none;
  &.base-button-router {
    color: $white;
    &:hover {
      color: $white;
    }
  }
}

.header__cart-icon {
  width: 30px;
  padding-bottom: 3px;
}

.header__logo {
  width: 30px;
  height: auto;
  padding-bottom: 5px;
}

.header__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.profile-popup {
  position: absolute;

  &__wrapper {
    position: relative;
  }
}

@media (max-width: $tablet-size) {
  .header__router-link {
    display: none;
  }
}
</style>
