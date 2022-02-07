<template>
  <a class="BaseButtonLink" v-on:click="click" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BaseButtonLink',

  props: {
    href: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClickSendDataToParent() {
      this.$emit('click');
    }
  }
};
</script>
