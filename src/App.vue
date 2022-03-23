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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
    Header: Header,
    Footer: Footer
  },

  mounted() {
    this.getUserInfo();

    let vm = this;

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.setDesktop();
        console.log('d');
      } else {
        vm.setMobile();
        console.log('m');
      }
    });
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isMobile', 'isDesktop'])
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo']),
    ...mapActions('ProfilePageModule', ['setMobile', 'setDesktop'])
  }
};
</script>
