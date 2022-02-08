<template>
  <a @click="onClickEmit" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BaseButtonLink',

  props: {
    href: {
      type: String,
      default: '',
      required: true
    }
  },

  methods: {
    onClickEmit() {
      this.$emit('click');
    }
  }
};
</script>
