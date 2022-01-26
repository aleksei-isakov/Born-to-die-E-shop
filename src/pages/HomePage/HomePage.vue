<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <Introduction msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Introduction from '@/components/Introduction/Introduction.vue';

export default {
  name: 'Home',
  components: {
    Introduction
  }
};
</script>
