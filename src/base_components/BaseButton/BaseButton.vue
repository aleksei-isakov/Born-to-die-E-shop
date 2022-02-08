<template>
  <button class="BaseButton" @:click="onClickEmit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {},

  methods: {
    onClickEmit() {
      this.$emit('click');
    }
  }
};
</script>
