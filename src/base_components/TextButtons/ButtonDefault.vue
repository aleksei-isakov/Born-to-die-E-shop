<template>
  <BaseTextButton class="button-default" @click="onClickEmitEvent">
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '../';

export default {
  name: 'ButtonDefault',

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
.button-default {
  padding: 6px 16px;
  background-color: unset;
  color: $primary;
  border: 1px solid $primary;
  &:hover {
    color: $primary-hover;
    border-color: $primary-hover;
  }
  &:disabled {
    border-color: $button-disabled-bg;
  }
}
</style>
