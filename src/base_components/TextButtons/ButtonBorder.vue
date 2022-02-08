<template>
  <BaseTextButton
    class="button-border"
    :class="color"
    @click="onClickEmitEvent"
  >
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '..';

export default {
  name: 'ButtonBorder',

  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },

  components: {
    BaseTextButton
  },

  methods: {
    onClickEmitEvent() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.button-border {
  padding: 8px 16px;
  background-color: unset;
  border: 1px solid $primary;
  &.blue {
    color: $primary;
    border-color: $primary;
    &:hover {
      color: $primary-hover;
      border-color: $primary-hover;
    }
  }
  &.red {
    color: $error;
    border-color: $error;
    &:hover {
      color: $error-hover;
      border-color: $error-hover;
    }
  }
  &:disabled {
    color: $button-disabled-bg;
    border-color: $button-disabled-bg;
    pointer-events: none;
  }
}
</style>
