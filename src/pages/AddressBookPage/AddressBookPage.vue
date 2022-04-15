<template>
  <div class="address-book-container">
    <div>
      <address-book-card
        v-for="address in addresses"
        :key="address.id"
        :name="getName(address)"
        :address="getAddress(address)"
        :phone="address.phone"
        :zipcode="address.zipCode"
      />
    </div>

    <div>
      <base-text-filled-button
        class="add-address-button"
        @click="onClickTogglePopup"
      >
        ADD ADDRESS
      </base-text-filled-button>

      <add-address-popup
        :is-popup-visible="isPopupVisible"
        @onClickClosePopup="onClickClosePopup"
      />
    </div>
  </div>
</template>

<script>
import AddAddressPopup from '@/components/AddAddressPopup/AddAddressPopup';
import { BaseTextFilledButton } from '@/base_components';
import AddressBookCard from '@/components/AddressBookCard/AddressBookCard.vue';
import addresses from '@/components/AddressBookCard/addressBookCardMock.json';

export default {
  name: 'AddressBookPage',

  components: { BaseTextFilledButton, AddAddressPopup, AddressBookCard },

  data: () => ({
    isPopupVisible: false,
    addresses: addresses
  }),

  methods: {
    onClickTogglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },

    onClickClosePopup() {
      this.isPopupVisible = false;
    },
    getName(address) {
      return `${address.gender === 'male' ? 'Mr.' : 'Mrs.'} ${
        address.firstName
      } ${address.lastName}`;
    },
    getAddress(address) {
      return `${address.country}, ${address.city}, ${address.street}`;
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
