<template>
  <button class="BaseButton" v-on:click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {},

  methods: {
    onClickSendDataToParent() {
      this.$emit('click');
    }
  }
};
</script>
