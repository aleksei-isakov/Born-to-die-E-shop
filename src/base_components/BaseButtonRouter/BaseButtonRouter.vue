<template>
  <router-link class="base-button-router" :to="path">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButtonRouter',

  props: {
    path: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>
