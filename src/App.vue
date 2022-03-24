<template>
  <v-app id="app">
    <site-header />
    <breadcrumbs />
    <router-view />
    <site-footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import siteHeader from './components/Header/siteHeader.vue';
import siteFooter from './components/Footer/siteFooter.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

export default {
  name: 'App',

  components: {
    siteHeader,
    siteFooter,
    Breadcrumbs
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isMobile', 'isDesktop'])
  },

  mounted() {
    this.getUserInfo();

    let vm = this;

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
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
