<template>
  <a class="base-button-link" :href="href" @click="onClickEmitEvent">
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
