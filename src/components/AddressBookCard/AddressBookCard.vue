<template>
  <div class="address-card">
    <div class="address-card__info">
      <div class="info-block">
        <p>
          {{ name }} <br />
          {{ phone }}
        </p>
        <p>{{ address }}</p>
        <p>{{ zipcode }}</p>
      </div>

      <div class="trash-icon-block" @click="onClickToggleDialog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="red"
            d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"
          />
        </svg>
      </div>
    </div>
    <base-text-filled-button class="address-card__button">
      EDIT
    </base-text-filled-button>
    <AddressDeleteDialog
      :is-dialog-visible="isDialogVisible"
      @onClickCloseDialog="onClickCloseDialog"
    >
      Are you sure you want to delete the current delivery address?
    </AddressDeleteDialog>
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import AddressDeleteDialog from '@/components/AddressBookCard/AddressDeleteDialog';
import addresses from '@/components/AddressBookCard/addressBookCardMock.json';

export default {
  name: 'AddressBookCard',

  components: {
    AddressDeleteDialog,
    BaseTextFilledButton
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
    }
  },

  data: () => ({
    isDialogVisible: false,
    addresses: addresses
  }),

  methods: {
    onClickToggleDialog() {
      this.isDialogVisible = !this.isDialogVisible;
    },
    onClickCloseDialog() {
      this.isDialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.address-card {
  max-width: 350px;
  box-shadow: $shadow;
  display: flex;
  flex-direction: column;
  padding: 15px;

  p {
    margin-bottom: 10px;
    text-align: left;
  }

  &__button {
    width: fit-content;
    align-self: flex-end;
  }

  &__info {
    display: flex;
    align-items: flex-start;
  }
}

.trash-icon-block {
  width: 40px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
}
</style>
