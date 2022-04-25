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
        <shopping-cart-trash-icon />
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
import ShoppingCartTrashIcon from '@/components/ShoppingCartTrashIcon/ShoppingCartTrashIcon';

export default {
  name: 'AddressBookCard',

  components: {
    ShoppingCartTrashIcon,
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
    isDialogVisible: false
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
  width: 25px;
  height: 25px;
  &:hover {
    cursor: pointer;
  }
}
</style>
