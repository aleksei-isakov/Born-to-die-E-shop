<template>
  <div>
    <profile-page-menu-desktop class="desktop" />
    <profile-page-menu-mobile class="mobile" />
  </div>
</template>

<script>
import ProfilePageMenuMobile from './ProfilePageMenuMobile/ProfilePageMenuMobile.vue';
import ProfilePageMenuDesktop from './ProfilePageMenuDesktop/ProfilePageMenuDesktop.vue';

export default {
  name: 'ProfilePageMenu',

  components: {
    ProfilePageMenuMobile,
    ProfilePageMenuDesktop
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.desktop {
  @media screen and (max-width: $tablet-size) {
    display: none;
  }
}

.mobile {
  @media screen and (min-width: $tablet-size) {
    display: none;
  }
}
</style>
