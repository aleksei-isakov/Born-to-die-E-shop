<template>
  <div>
    <profile-page-mobile />
    <profile-page-desktop />
  </div>
</template>

<script>
import ProfilePageMobile from './ProfilePageMobile.vue';
import ProfilePageDesktop from './ProfilePageDesktop.vue';

export default {
  name: 'ProfilePage',
  components: { ProfilePageMobile, ProfilePageDesktop }
};
</script>
