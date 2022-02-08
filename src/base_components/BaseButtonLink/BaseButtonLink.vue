<template>
  <a :href="href">
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
  }
};
</script>
