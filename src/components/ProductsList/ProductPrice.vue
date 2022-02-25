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
  color: black;
  font-size: 1.5rem;
}
</style>
