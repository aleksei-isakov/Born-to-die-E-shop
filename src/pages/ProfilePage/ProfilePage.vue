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
export default {
  name: 'ProfilePage',
  components: {
    BaseButtonRouter
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
// @media (max-width: $tablet-size) {
//   .profile-page {
//     &__wrapper {
//       margin: 0 auto;
//       width: 100%;
//       margin-top: 40px;
//     }

//     &__sidebar {
//       position: absolute;
//       bottom: 0;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 100%;
//       background: $primary;
//       height: 80px;
//     }

//     &__sidebar_info {
//       width: 100%;
//       display: flex;
//       flex-direction: row;
//       align-items: space-around;
//     }

//     &__content {
//       display: none;
//     }

//     &__sidebar_item {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;
//       width: 25%;
//       i {
//         color: #ffffff;
//       }
//       .base-button-router {
//         display: flex;
//         color: #ffffff;
//         opacity: 50%;
//         &:hover {
//           text-decoration: none;
//           color: #ffffff;
//           opacity: 100%;
//         }
//       }
//     }
//   }
// }
</style>
