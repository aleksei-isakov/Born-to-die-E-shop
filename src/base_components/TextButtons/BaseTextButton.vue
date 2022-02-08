<template>
  <BaseButton class="base-text-button" @click="onClickEmitEvent">
    <slot></slot>
  </BaseButton>
</template>

<script>
import { BaseButton } from '..';

export default {
  name: 'BaseTextButton',

  components: {
    BaseButton
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
.base-text-button {
  padding: 7px 17px;
  border: 0;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.03em;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  transition: $transition;
  cursor: pointer;
  &:disabled {
    background-color: $button-disabled-bg;
    color: $button-disabled-color;
    pointer-events: none;
  }
}
</style>
