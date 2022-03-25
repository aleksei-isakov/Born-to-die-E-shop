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
import siteHeader from './components/Header/siteHeader.vue';
import siteFooter from './components/Footer/siteFooter.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Snackbar from '@/components/Snackbar/Snackbar';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    siteHeader,
    siteFooter,
    Breadcrumbs,
    Snackbar
  },

  mounted() {
    this.getUserInfo();
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo'])
  }
};
</script>
