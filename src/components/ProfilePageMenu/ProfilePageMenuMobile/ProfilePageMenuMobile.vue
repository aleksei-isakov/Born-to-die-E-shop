<template>
  <div class="profile-page-menu__bottombar">
    <div v-for="item in items" :key="item.id" class="bottombar-menu-item">
      <base-button-router :path="item.path">
        <i :class="`${item.icon} bottombar-menu-item__icon fa-2x`" />
      </base-button-router>
      <base-button-router :path="item.path"
        >{{ item.title }}
      </base-button-router>
    </div>
  </div>
</template>

<script>
import { BaseButtonRouter } from '@/base_components/';

export default {
  name: 'ProfilePageMenuMobile',

  components: {
    BaseButtonRouter
  },

  data() {
    return {
      items: [
        {
          title: 'Profile',
          icon: 'fas fa-house-user',
          path: '/profile'
        },

        {
          title: 'Wishlist',
          icon: 'fas fa-heart',
          path: '/wishlist'
        },

        {
          title: 'Orders',
          icon: 'fas fa-folder',
          path: '/orders'
        },

        {
          title: 'Address book',
          icon: 'fas fa-address-book',
          path: '/address-book'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page-menu {
  &__bottombar {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background: $primary;

    > .bottombar-menu-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 25%;
      opacity: 50%;
      min-height: 80px;
      color: $white;
      &:hover {
        color: $white;
        opacity: 100%;
      }

      .base-button-router {
        color: $white;
        text-decoration: none;
        &:hover {
          color: $white;
          opacity: 100%;
        }
      }
    }
  }
}
</style>
