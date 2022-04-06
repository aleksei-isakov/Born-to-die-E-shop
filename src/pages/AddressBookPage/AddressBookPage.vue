<template>
  <div class="address-book-container">
    <address-book-card />
  </div>
</template>

<script>
import AddressBookCard from '@/components/AddressBookCard/AddressBookCard.vue';
export default {
  name: 'AddressBookPage',

  components: {
    AddressBookCard
  },

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
