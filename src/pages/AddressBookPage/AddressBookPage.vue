<template>
  <div>
    <div class="address-book__list">
      <address-book-card
        v-for="address in addresses"
        :id="address.id"
        :key="address.id"
        :name="getName(address)"
        :address="getAddress(address)"
        :phone="getPhone(address.phoneNumberCode, address.phoneNumber)"
        :zipcode="address.zip"
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
        :type-of-popup="'add'"
        :is-popup-visible="isPopupVisible"
        @onClickClosePopup="onClickClosePopup"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddAddressPopup from '@/components/AddAddressPopup/AddAddressPopup';
import { BaseTextFilledButton } from '@/base_components';
import AddressBookCard from '@/components/AddressBookCard/AddressBookCard.vue';

export default {
  name: 'AddressBookPage',

  components: { BaseTextFilledButton, AddAddressPopup, AddressBookCard },

  data: () => ({
    isPopupVisible: false
  }),

  computed: {
    ...mapGetters('AddressesModule', ['addresses'])
  },

  mounted() {
    this.getAddresses();
  },

  methods: {
    ...mapActions('AddressesModule', ['createNewAddress', 'getAddresses']),

    onClickTogglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },

    onClickClosePopup() {
      this.isPopupVisible = false;
    },

    getName(address) {
      return `${address.gender === 'male' ? 'Mr.' : 'Mrs.'} ${address.name} ${
        address.surname
      }`;
    },

    getAddress(address) {
      return `${address.country}, ${address.city}, ${address.street}`;
    },

    getPhone(code, phone) {
      return `${code} ${phone}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.address-book__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.add-address-button {
  width: 100%;
  margin-bottom: 20px;
}
</style>
