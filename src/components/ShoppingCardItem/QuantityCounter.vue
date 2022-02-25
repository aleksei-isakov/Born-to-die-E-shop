<template>
  <div class="quantity__wrapper">
    <BaseTextFilledButton>-</BaseTextFilledButton>
    <input readonly :value="quantity" class="quantity-field" />
    <BaseTextFilledButton>+</BaseTextFilledButton>
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
      require: true,
      default: 1
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
