<template>
  <a class="BaseButtonLink" @click="onClickEmitEvent" :href="href">
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
    onClickEmitEvent() {
      this.$emit('click');
    }
  }
};
</script>
