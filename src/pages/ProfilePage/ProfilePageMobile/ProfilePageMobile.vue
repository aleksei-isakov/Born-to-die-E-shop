<template>
  <div v-if="isMobile" class="profile-page__container">
    <div class="profile-page__wrapper">
      <div class="profile-page__header">
        <h1>Profile</h1>
      </div>
      <div class="profile-page__sections">
        <div class="profile-page__bottombar">
          <div class="profile-page__bottombar_info">
            <div class="profile-page__bottombar_item">
              <i class="fas fa-house-user fa-2x"></i>
              <base-button-router path="/profile"> Profile </base-button-router>
            </div>
            <div class="profile-page__bottombar_item">
              <i class="fas fa-heart fa-2x"></i>
              <base-button-router path="/wishlist">
                Wishlist
              </base-button-router>
            </div>
            <div class="profile-page__bottombar_item">
              <i class="fas fa-folder fa-2x"></i>
              <base-button-router path="/orders"> Orders </base-button-router>
            </div>
            <div class="profile-page__bottombar_item">
              <i class="fas fa-address-book fa-2x"></i>
              <base-button-router path="/address-book">
                Address book
              </base-button-router>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonRouter from '@/base_components/BaseButtonRouter/BaseButtonRouter';
import { mapGetters } from 'vuex';
export default {
  name: 'ProfilePageMobile',
  components: {
    BaseButtonRouter
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop', 'isMobile'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page {
  &__header {
    display: flex;
    align-self: flex-start;
    padding: 40px;

    h1 {
      font-weight: normal;
      color: $font-color-subtitle;
    }
  }

  &__bottombar {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: $primary;
    min-height: 80px;
  }

  &__bottombar_info {
    width: 100%;
    display: flex;
    align-items: space-around;
  }

  &__bottombar_item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    height: 100%;
    opacity: 50%;
    i {
      color: #ffffff;
    }
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
</style>
