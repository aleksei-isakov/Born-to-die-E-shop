<template>
  <v-app id="app">
    <Header />
    <router-view />
    <Footer />
    <Snackbar />
  </v-app>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Snackbar from '@/components/Snackbar/Snackbar';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
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
