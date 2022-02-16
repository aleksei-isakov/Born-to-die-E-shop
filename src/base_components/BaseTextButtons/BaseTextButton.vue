<template>
  <BaseButton class="base-text-button" @click="onClickEmitEvent">
    <slot></slot>
  </BaseButton>
</template>

<script>
import { BaseButton } from '@/base_components/';

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
@import '@/scss/CustomVariables.scss';
.base-text-button {
  height: fit-content;
  padding: 7px 17px;
  border: 0;
  border-radius: 4px;
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
