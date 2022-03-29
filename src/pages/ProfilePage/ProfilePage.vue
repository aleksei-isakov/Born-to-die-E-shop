<template>
  <div class="profile-page__wrapper">
    <h1 class="profile-page__header">{{ getPageName }}</h1>
    <div class="profile-page__sections">
      <profile-page-menu />
      <div class="profile-page__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';

export default {
  name: 'ProfilePage',

  components: { ProfilePageMenu },

  computed: {
    getPageName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page {
  &__wrapper {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 70%;
    min-height: 100vh;
    @media screen and (max-width: $tablet-size) {
      width: 90%;
    }
  }

  &__header {
    width: 100%;
    text-align: left;
    font-weight: normal;
    color: $font-color-subtitle;
  }

  &__sections {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    @media screen and (max-width: $tablet-size) {
      gap: 0px;
    }
  }

  &__content {
    background: $white;
    border: 1px solid $light-border-color;
    box-shadow: $shadow;
    flex-grow: 1;

    @media screen and (max-width: $tablet-size) {
      box-shadow: none;
      border: 0;
    }
  }
}
</style>
