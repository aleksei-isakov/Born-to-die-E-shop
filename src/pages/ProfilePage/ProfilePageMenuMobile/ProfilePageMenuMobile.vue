<template>
  <div v-if="isMobile" class="profile-page__container">
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
  </div>
</template>

<script>
import BaseButtonRouter from '@/base_components/BaseButtonRouter/BaseButtonRouter';
import { mapGetters } from 'vuex';

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
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop', 'isMobile'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page-menu {
  &__bottombar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
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

      .base-button-router {
        color: #ffffff;
        text-decoration: none;
        &:hover {
          color: #ffffff;
          opacity: 100%;
        }
      }

      &:hover {
        color: #ffffff;
        opacity: 100%;
      }
    }
  }
}
</style>
