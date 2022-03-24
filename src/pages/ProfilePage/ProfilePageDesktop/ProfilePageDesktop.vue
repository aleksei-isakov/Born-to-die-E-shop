<template>
  <div v-if="isDesktop" class="profile-page__container">
    <div class="profile-page__wrapper">
      <div class="profile-page__header">
        <h1>Profile</h1>
      </div>
      <div class="profile-page__sections">
        <div class="profile-page__sidebar">
          <div class="profile-page__sidebar_info">
            <div class="profile-page__sidebar_item">
              <base-button-router path="/profile">
                <i class="fas fa-house-user"></i>
                My profile
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/wishlist">
                <i class="fas fa-heart"></i>
                My wishlist
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/orders">
                <i class="fas fa-folder"></i>
                My orders
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/address-book">
                <i class="fas fa-address-book"></i>
                My address book
              </base-button-router>
            </div>
          </div>
        </div>
        <div class="profile-page__content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonRouter from '@/base_components/BaseButtonRouter/BaseButtonRouter';
import { mapGetters } from 'vuex';

export default {
  name: 'ProfilePageDesktop',
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
  &__container {
    height: 90%;
    background: $background;
  }

  &__wrapper {
    margin: 0 auto;
    width: 70%;
    margin-top: 40px;
    gap: 10px;
  }

  &__header {
    display: flex;
    align-self: flex-start;

    h1 {
      font-weight: normal;
      color: $font-color-subtitle;
    }
  }

  &__sections {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  &__sidebar,
  &__content {
    background: #ffffff;
    border: 1px solid $light-border-color;
    box-shadow: $shadow;
    height: 450px;
  }

  &__content {
    width: 70%;
  }

  &__sidebar {
    width: 30%;
    min-width: 180px;
  }

  &__sidebar_info {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  &__sidebar_item {
    display: flex;
    i {
      margin-right: 8px;
      color: $font-color-subtitle;
    }

    .base-button-router {
      color: $font-color-subtitle;
      &:hover {
        color: $grey-hover;
        text-decoration: none;
      }
    }
  }
}
</style>
