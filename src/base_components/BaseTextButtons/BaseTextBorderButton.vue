<template>
  <BaseTextButton
    class="base-text-border-button"
    :class="validColor"
    @click="onClickEmitEvent"
  >
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '@/base_components/';

export default {
  name: 'BaseTextBorderButton',

  components: {
    BaseTextButton
  },

  props: {
    color: {
      type: String,
      default: 'custom-blue',
      validator: function (value) {
        return (
          ['custom-blue', 'custom-red', 'custom-white'].indexOf(value) !== -1
        );
      }
    }
  },

  computed: {
    validColor: function () {
      return ['custom-blue', 'custom-red', 'custom-white'].indexOf(
        this.color
      ) !== -1
        ? this.color
        : 'custom-blue';
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

.base-text-border-button {
  padding: 6px 15px;
  background-color: unset;
  border: 1px solid $primary;
  &.custom-blue {
    color: $primary;
    border-color: $primary;
    &:hover {
      color: $primary-hover;
      border-color: $primary-hover;
    }
  }
  &.custom-red {
    color: $error;
    border-color: $error;
    &:hover {
      color: $error-hover;
      border-color: $error-hover;
    }
  }
  &.custom-white {
    color: $white;
    border-color: $white;
    &:hover {
      color: $white-hover;
      border-color: $white-hover;
    }
  }
  &:disabled {
    color: $button-disabled-color;
    border-color: $button-disabled-color;
    pointer-events: none;
  }
}
</style>
