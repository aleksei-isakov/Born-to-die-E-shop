<template>
  <span class="found-products">Found: {{ itemsPerPage }}</span>
</template>

<script>
export default {
  props: {
    itemsPerPage: {
      type: Number,
      required: true,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.found-products {
  font-weight: bold;
  color: $primary;
  margin: 20px 0;
}
</style>
