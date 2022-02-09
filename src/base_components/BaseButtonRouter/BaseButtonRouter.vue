<template>
  <button class="BaseButtonRouter">
    <router-link :to="path"><slot></slot></router-link>
  </button>
</template>

<script>
export default {
  name: 'BaseButtonRouter',

  props: {
    path: {
      type: String,
      default: ''
    }
  }
};
</script>
