<template>
  <TextButton
    class="border-button"
    :class="validColor"
    @click="onClickEmitEvent"
  >
    <slot></slot>
  </TextButton>
</template>

<script>
import { TextButton } from '..';

export default {
  name: 'BorderButton',

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
    TextButton
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

.border-button {
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
    color: $button-disabled-color;
    border-color: $button-disabled-color;
    pointer-events: none;
  }
}
</style>
