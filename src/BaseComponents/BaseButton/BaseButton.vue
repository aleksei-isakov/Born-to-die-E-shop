<template>
  <button class="BaseButton" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {},

  data() {
    return {};
  },

  methods: {
    click() {
      this.$emit('click', data);
    }
  }
};
</script>
