<template>
  <v-app id="app">
    <header-custom />
    <breadcrumbs />
    <router-view />
    <footer-custom />
  </v-app>
</template>

<script>
import HeaderCustom from './components/Header/Header.vue';
import FooterCustom from './components/Footer/Footer.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    HeaderCustom,
    FooterCustom,
    Breadcrumbs
  },

  mounted() {
    this.getUserInfo();
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo'])
  }
};
</script>
