<template>
  <BaseTextButton
    class="button-filled"
    :class="validColor"
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

  computed: {
    validColor: function () {
      return ['blue', 'red', 'white'].indexOf(this.color) !== -1
        ? this.color
        : 'blue';
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
  box-shadow: $shadow;
  &.blue {
    color: $white;
    background-color: $primary;
    &:hover {
      background-color: $primary-hover;
    }
  }
  &.red {
    color: $white;
    background-color: $error;
    &:hover {
      background-color: $error-hover;
    }
  }
  &.white {
    color: $primary;
    background-color: $white;
    &:hover {
      background-color: $white-hover;
    }
  }
  &:disabled {
    background-color: $button-disabled-bg;
    color: $button-disabled-color;
    pointer-events: none;
  }
}
</style>
