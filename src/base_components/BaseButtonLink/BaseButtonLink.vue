<template>
  <a class="base-button-link" @click="onClickEmitEvent" :href="href">
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
    onClickEmitEvent() {
      this.$emit('click');
    }
  }
};
</script>
