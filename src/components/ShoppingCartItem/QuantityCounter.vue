<template>
  <div class="quantity__wrapper">
    <base-text-filled-button @click="onClickDecreaseQuantity"
      >-</base-text-filled-button
    >
    <input readonly :value="quantity" class="quantity__field" />
    <base-text-filled-button @click="onClickIncreaseQuantity"
      >+</base-text-filled-button
    >
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components';

export default {
  name: 'QuantityCounter',

  components: { BaseTextFilledButton },

  props: {
    quantity: {
      type: Number,
      required: true,
      default: 1
    }
  },

  methods: {
    onClickIncreaseQuantity() {
      this.$emit('increase');
    },

    onClickDecreaseQuantity() {
      this.$emit('decrease');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.quantity__wrapper {
  display: flex;
}

.quantity__field {
  width: 60px;
  text-align: center;
  border: solid #e4e4e4ff;
  border-width: 2px 0;
}
</style>
