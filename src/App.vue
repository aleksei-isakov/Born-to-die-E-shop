<template>
  <v-app id="app">
    <site-header />
    <breadcrumbs />
    <router-view />
    <Snackbar />
    <site-footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import siteHeader from './components/Header/siteHeader.vue';
import siteFooter from './components/Footer/siteFooter.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { TABLET_SIZE } from '@/constants';
import Snackbar from '@/components/Snackbar/Snackbar';

export default {
  name: 'App',

  components: {
    siteHeader,
    siteFooter,
    Breadcrumbs,
    Snackbar
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop'])
  },

  mounted() {
    this.getUserInfo();
    window.addEventListener('resize', this.setApplicationSize);
    this.setApplicationSize();
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo']),
    ...mapActions('ProfilePageModule', ['setMobile', 'setDesktop']),
    setApplicationSize() {
      if (window.innerWidth >= TABLET_SIZE) {
        this.setDesktop();
      } else {
        this.setMobile();
      }
    }
  }
};
</script>
