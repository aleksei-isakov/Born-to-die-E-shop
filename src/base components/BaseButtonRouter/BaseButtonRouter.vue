<template>
  <button class="BaseButtonRouter" v-on:click="click">
    <router-link :to="require(path)"><slot></slot></router-link>
  </button>
</template>

<script>
export default {
  name: 'BaseButtonRouter',

  props: {
    path: {
      type: String,
      default: ''
    },

    methods: {
      onClickSendDataToParent() {
        this.$emit('click');
      }
    }
  }
};
</script>
