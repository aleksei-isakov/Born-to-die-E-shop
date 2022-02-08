<template>
  <BaseTextButton class="button-primary" @click="onClickEmitEvent">
    <slot></slot>
  </BaseTextButton>
</template>

<script>
import { BaseTextButton } from '../';

export default {
  name: 'ButtonPrimary',

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
.button-primary {
  background-color: $primary;
  color: $white;
  box-shadow: $shadow;
  border-color: $primary;
  &:hover {
    background-color: $primary-hover;
  }
}
</style>
