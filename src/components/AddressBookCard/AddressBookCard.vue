<template>
  <div class="address-card">
    <div class="address-card__info">
      <p>
        {{ name }} <br />
        {{ phone }}
      </p>
      <p class="address-card__address">{{ address }}</p>
      <p>{{ zipcode }}</p>
    </div>
    <base-text-filled-button
      class="address-card__button"
      @click="onClickTogglePopup"
    >
      EDIT
    </base-text-filled-button>

    <add-address-popup
      :type-of-popup="EDIT_POPUP"
      :is-popup-visible="isPopupVisible"
      @onClickClosePopup="onClickClosePopup"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { BaseTextFilledButton } from '@/base_components/';
import AddAddressPopup from '@/components/AddAddressPopup/AddAddressPopup';
import { EDIT_POPUP } from '../../constants';

export default {
  name: 'AddressBookCard',

  components: {
    BaseTextFilledButton,
    AddAddressPopup
  },

  props: {
    name: {
      type: String,
      default: ''
    },

    address: {
      type: String,
      default: ''
    },

    phone: {
      type: String,
      default: ''
    },

    zipcode: {
      type: String,
      default: ''
    },

    id: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    isPopupVisible: false,
    EDIT_POPUP: EDIT_POPUP
  }),

  methods: {
    ...mapActions('AddressesModule', ['setCurrentAddress']),

    onClickTogglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
      this.setCurrentAddress(this.id);
    },

    onClickClosePopup() {
      this.isPopupVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.address-card {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 30px;
  padding: 15px;
  background: $white;
  box-shadow: $shadow;

  @media screen and (max-width: $tablet-size) {
    width: 100%;
  }

  &__info {
    height: 144px;
  }

  p {
    margin-bottom: 10px;
    text-align: left;
  }

  &__address {
    height: 80px;
  }

  &__button {
    width: fit-content;
    align-self: flex-end;
  }
}
</style>
