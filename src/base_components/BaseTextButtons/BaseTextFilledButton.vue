<template>
  <BaseTextButton
    class="base-text-filled-button"
    :class="validColor"
    @click="onClickEmitEvent"
  >
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '@/base_components/';

export default {
  name: 'BaseTextFilledButton',

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
@import '@/scss/CustomVariables.scss';

.base-text-filled-button {
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
    background-color: $button-disabled-bg !important;
    color: $button-disabled-color !important;
    pointer-events: none;
  }
}
</style>
