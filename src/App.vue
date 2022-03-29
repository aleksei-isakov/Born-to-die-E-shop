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

  beforeMount() {
    this.getUserInfo();
  },

  mounted() {
    this.getUserInfo();

    let vm = this;

    window.addEventListener('resize', function () {
      if (window.innerWidth >= TABLET_SIZE) {
        vm.setDesktop();
      } else {
        vm.setMobile();
      }
    });
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo']),
    ...mapActions('ProfilePageModule', ['setMobile', 'setDesktop'])
  }
};
</script>
