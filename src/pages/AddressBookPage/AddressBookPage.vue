<template>
  <div class="address-book-container"></div>
</template>

<script>
export default {
  name: 'AddressBookPage',

  computed: {
    getPageName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.address-book {
  &__header {
    width: 100%;
    text-align: left;
    font-weight: normal;
    color: $font-color-subtitle;
  }
}
</style>
