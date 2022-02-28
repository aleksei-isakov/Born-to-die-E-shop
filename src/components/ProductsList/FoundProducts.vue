<template>
  <span class="found-products">Found: {{ itemsTotalCount }}</span>
</template>

<script>
export default {
  name: 'FoundProducts',

  props: {
    itemsTotalCount: {
      type: Number,
      required: true,
      default: 0
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
}
</style>
