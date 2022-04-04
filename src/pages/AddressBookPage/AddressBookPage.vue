<template>
  <div class="address-book__container">
    <h1 class="address-book__header">{{ getPageName }}</h1>
  </div>
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
