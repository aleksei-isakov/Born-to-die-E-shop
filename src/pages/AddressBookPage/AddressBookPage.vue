<template>
  <div class="address-book-container">
    <base-text-filled-button
      class="add-address-button"
      @click="onClickOpenPopup"
    >
      ADD ADDRESS
    </base-text-filled-button>

    <add-address-popup
      :is-popup-visible="isPopupVisible"
      @onClickClosePopup="onClickClosePopup"
    />
  </div>
</template>

<script>
import AddAddressPopup from '@/components/AddAddressPopup/AddAddressPopup';
import BaseTextFilledButton from '@/base_components/BaseTextButtons/BaseTextFilledButton';
export default {
  name: 'AddressBookPage',

  components: { BaseTextFilledButton, AddAddressPopup },

  data: () => ({
    isPopupVisible: false
  }),

  methods: {
    onClickOpenPopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },

    onClickClosePopup() {
      this.isPopupVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.address-book-container {
}

.add-address-button {
  width: 100%;
}
</style>
