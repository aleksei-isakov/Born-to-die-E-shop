<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/components">Components</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',

  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>
