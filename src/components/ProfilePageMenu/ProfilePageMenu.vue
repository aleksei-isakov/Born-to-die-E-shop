<template>
  <div>
    <profile-page-menu-desktop v-if="isDesktop" />
    <profile-page-menu-mobile v-else />
  </div>
</template>

<script>
import ProfilePageMenuMobile from './ProfilePageMenuMobile/ProfilePageMenuMobile.vue';
import ProfilePageMenuDesktop from './ProfilePageMenuDesktop/ProfilePageMenuDesktop.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ProfilePageMenu',

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop'])
  },

  components: {
    ProfilePageMenuMobile,
    ProfilePageMenuDesktop
  }
};
</script>
