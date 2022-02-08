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
  height: fit-content;
  padding: 9px 17px;
  border: 0;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.03em;
  font-family: Roboto, sans-serif;
  transition: $transition;
  cursor: pointer;
}
</style>
