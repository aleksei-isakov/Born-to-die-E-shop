<template>
  <button @click="onClickEmit">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  methods: {
    onClickEmit() {
      this.$emit('click');
    }
  }
};
</script>
