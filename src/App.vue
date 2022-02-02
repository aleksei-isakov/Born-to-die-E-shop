<template>
  <div id="app">
    <ProductDetails />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/components">Components</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails/ProductDetails';

export default {
  components: { ProductDetails }
};
</script>
