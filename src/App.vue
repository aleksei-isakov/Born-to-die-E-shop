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
import { mapActions } from 'vuex';
import siteHeader from './components/Header/siteHeader.vue';
import siteFooter from './components/Footer/siteFooter.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Snackbar from '@/components/Snackbar/Snackbar';

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

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.theme--light.v-application {
  background: $background-grey;
}
</style>
