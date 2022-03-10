<template>
  <v-app id="app">
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Header: Header,
    Footer: Footer
  },

  mounted() {
    this.getUserInfo();
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo'])
  }
};
</script>
