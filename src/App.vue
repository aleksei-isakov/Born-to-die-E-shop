<template>
  <v-app id="app">
    <Header />
    <Breadcrumbs />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Header: Header,
    Footer: Footer,
    Breadcrumbs: Breadcrumbs
  },

  mounted() {
    this.getUserInfo();
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo'])
  }
};
</script>
