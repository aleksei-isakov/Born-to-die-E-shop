<template>
  <button class="base-button-router" @click="sendDataToParent">
    <router-link :to="require(path)"><slot></slot></router-link>
  </button>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export default {
  name: 'base-button-router',
  props: {
    path: String
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
