<template>
  <div class="profile-page__container">
    <div class="profile-page__wrapper">
      <div class="profile-page__header">
        <h1>Profile</h1>
      </div>
    </div>
    <profile-page-menu-mobile />
    <profile-page-menu-desktop />
  </div>
</template>

<script>
import ProfilePageMenuMobile from './ProfilePageMenuMobile/ProfilePageMenuMobile.vue';
import ProfilePageMenuDesktop from './ProfilePageMenuDesktop/ProfilePageMenuDesktop.vue';

export default {
  name: 'ProfilePage',

  components: {
    ProfilePageMenuMobile,
    ProfilePageMenuDesktop
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page {
  &__container {
    min-width: 100%;
    min-height: 100%;
  }

  &__wrapper {
    margin: 0 auto;
    width: 70%;
  }

  &__header {
    display: flex;
    align-self: flex-start;

    h1 {
      font-weight: normal;
      color: $font-color-subtitle;
    }
  }
}
</style>
