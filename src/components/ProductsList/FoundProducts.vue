<template>
  <p class="found-products">{{ productsQuantityValue }}</p>
</template>

<script>
export default {
  name: 'FoundProducts',

  props: {
    productsQuantity: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    productsQuantityValue() {
      return `Found: ${this.productsQuantity}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.found-products {
  font-weight: bold;
  color: $primary;
  margin: 20px 0;
  text-align: left;
}
</style>
