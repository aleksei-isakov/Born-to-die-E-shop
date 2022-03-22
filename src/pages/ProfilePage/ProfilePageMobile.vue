<template>
  <div class="profile-page__container">
    <div class="profile-page__wrapper">
      <div class="profile-page__header">
        <h1>Profile</h1>
      </div>
      <div class="profile-page__sections">
        <div class="profile-page__sidebar">
          <div class="profile-page__sidebar_info">
            <div class="profile-page__sidebar_item">
              <base-button-router path="/profile">
                <i class="fas fa-house-user fa-2x"></i>
                Profile
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/wishlist">
                <i class="fas fa-heart fa-2x"></i>
                Wishlist
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/orders">
                <i class="fas fa-folder fa-2x"></i>
                Orders
              </base-button-router>
            </div>
            <div class="profile-page__sidebar_item">
              <base-button-router path="/address-book">
                <i class="fas fa-address-book fa-2x"></i>
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
export default {
  name: 'ProfilePageMobile',
  components: {
    BaseButtonRouter
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

@media (max-width: $tablet-size) {
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

    &__sidebar {
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: $primary;
      min-height: 80px;
    }

    &__sidebar_info {
      width: 100%;
      display: flex;
      align-items: space-around;
    }

    &__sidebar_item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 25%;
      height: 100%;
      i {
        color: #ffffff;
      }
      .base-button-router {
        display: flex;
        color: #ffffff;
        opacity: 50%;
        &:hover {
          text-decoration: none;
          color: #ffffff;
          opacity: 100%;
        }
      }
    }
  }
}
</style>
