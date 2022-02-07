<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <Introduction msg="Welcome to Your Vue.js App" />
    <ProductsList />
  </div>
</template>

<script>
import Introduction from '@/components/Introduction/Introduction.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';

export default {
  name: 'HomePage',

  components: {
    Introduction,
    ProductsList
  }
};
</script>
