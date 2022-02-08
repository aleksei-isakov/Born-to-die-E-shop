<template>
  <BaseTextButton
    class="button-filled"
    :class="color"
    @click="onClickEmitEvent"
  >
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '..';

export default {
  name: 'ButtonFilled',

  components: {
    BaseTextButton
  },

  props: {
    color: {
      type: String,
      default: 'blue'
    }
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

.button-filled {
  color: $white;
  box-shadow: $shadow;
  &.blue {
    background-color: $primary;
    &:hover {
      background-color: $primary-hover;
    }
  }
  &.red {
    background-color: $error;
    &:hover {
      background-color: $error-hover;
    }
  }
  &:disabled {
    background-color: $button-disabled-bg;
    color: $button-disabled-color;
    pointer-events: none;
  }
}
</style>
