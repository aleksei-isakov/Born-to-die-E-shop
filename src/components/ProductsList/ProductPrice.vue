<template>
  <div class="product-price"><slot></slot></div>
</template>

<script>
export default {
  name: 'ProductPrice'
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';
.product-price {
  color: black;
  font-size: 1.5rem;
}
.crossed {
  text-decoration: line-through;
  color: $font-color-subtitle;
  font-size: 14px;
  margin-left: 10px;
}
</style>
