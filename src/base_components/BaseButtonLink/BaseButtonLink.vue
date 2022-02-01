<template>
  <button class="base-button-link" @click="sendDataToParent">
    <a :href="href"><slot></slot></a>
  </button>
</template>

<script>
export default {
  name: 'base-button-link',
  props: {
    href: String
  },
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
