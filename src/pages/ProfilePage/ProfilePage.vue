<template>
  <div>
    <profile-page-mobile />
    <profile-page-desktop />
  </div>
</template>

<script>
import ProfilePageMobile from './ProfilePageMobile/ProfilePageMobile.vue';
import ProfilePageDesktop from './ProfilePageDesktop/ProfilePageDesktop.vue';

export default {
  name: 'ProfilePage',
  components: { ProfilePageMobile, ProfilePageDesktop }
};
</script>
