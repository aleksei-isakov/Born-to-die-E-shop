<template>
  <BaseTextButton
    class="button-border"
    :class="validColor"
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
      default: 'blue',
      validator: function (value) {
        return ['blue', 'red', 'white'].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    validColor: function () {
      return ['blue', 'red', 'white'].indexOf(this.color) !== -1
        ? this.color
        : 'blue';
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
  padding: 5px 15px;
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
  &.white {
    color: $white;
    border-color: $white;
    &:hover {
      color: $white-hover;
      border-color: $white-hover;
    }
  }
  &:disabled {
    color: $button-disabled-bg;
    border-color: $button-disabled-bg;
    pointer-events: none;
  }
}
</style>
