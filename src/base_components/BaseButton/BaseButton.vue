<template>
  <button class="base-button" @click="sendDataToParent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {},
  data() {
    return {};
  },
  methods: {
    sendDataToParent() {
      this.$emit('sendDataToParent', data);
    }
  }
};
</script>

<style lang="scss"></style>
