<template>
  <div class="mobile-menu-button" @click="onClickEmitEvent">
    <div
      v-for="index in elementsNumber"
      :key="index"
      class="mobile-menu-button__element"
    />
  </div>
</template>

<script>
export default {
  name: 'MobileMenuButton',

  data() {
    return {
      elementsNumber: 3
    };
  },

  methods: {
    onClickEmitEvent() {
      this.$emit('click', true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.mobile-menu-button {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  cursor: pointer;

  &__element {
    width: 35px;
    height: 4px;
    background-color: $white;
  }

  @media (min-width: $tablet-size) {
    display: none;
  }
}
</style>
