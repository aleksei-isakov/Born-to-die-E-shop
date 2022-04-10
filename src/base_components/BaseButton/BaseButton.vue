<template>
  <button class="base-button" @click="onClickEmitEvent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  methods: {
    onClickEmitEvent() {
      this.$emit('click');
    }
  }
};
</script>
