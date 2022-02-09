<template>
  <a class="BaseButtonLink" @click="onClickEmit" :href="href">
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
    onClickEmit() {
      this.$emit('click');
    }
  }
};
</script>
