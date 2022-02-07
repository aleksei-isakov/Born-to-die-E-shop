<template>
  <div class="product-price"><slot></slot></div>
</template>

<script>
export default {
  name: 'ProductPrice'
};
</script>

<style scoped>
.product-price {
  font-size: 1.5rem;
}
</style>
