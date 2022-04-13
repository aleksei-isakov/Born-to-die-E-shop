<template>
  <div class="address-book-container">
    <address-book-card
      v-for="address in addresses"
      :key="address.id"
      :name="getName(address)"
      :address="getAddress(address)"
      :phone="address.phone"
      :zipcode="address.zipCode"
    />
  </div>
</template>

<script>
import AddressBookCard from '@/components/AddressBookCard/AddressBookCard.vue';
import addresses from '@/components/AddressBookCard/addressBookCardMock.json';

export default {
  name: 'AddressBookPage',

  components: {
    AddressBookCard
  },

  data() {
    return {
      addresses: addresses
    };
  },

  methods: {
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
