<template>
  <div class="quantity__wrapper">
    <BaseTextFilledButton @click="onClickDecreaseQuantity"
      >-</BaseTextFilledButton
    >
    <input readonly :value="quantity" class="quantity-field" />
    <BaseTextFilledButton @click="onClickIncreaseQuantity"
      >+</BaseTextFilledButton
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
  width: 30%;
  display: inline-flex;
  flex-grow: 0;
  justify-content: flex-end;
}

.quantity-field {
  width: 60px;
  text-align: center;
  border: 2px solid #e4e4e4ff;
}

@media screen and (max-width: $tablet-size) {
  .quantity__wrapper {
    width: auto;
  }

  .quantity-field {
    width: 30px;
  }
}
</style>
