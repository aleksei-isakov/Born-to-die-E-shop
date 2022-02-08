<template>
  <router-link :to="path">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButtonRouter',

  props: {
    path: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
.base-button-router {
  display: block;
  text-transform: uppercase;
  color: #e7e7e7;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.03em;
  font-family: Roboto, sans-serif;
  transition: $transition;
  &:hover {
    text-decoration: none;
    color: $white;
  }
  &.router-link-exact-active {
    color: $white;
  }
}
</style>
