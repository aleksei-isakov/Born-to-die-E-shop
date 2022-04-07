<template>
  <div class="address-card">
    <div class="address-card__info">
      <p>
        {{ name }} <br />
        {{ phone }}
      </p>
      <p>{{ address }}</p>
      <p>{{ zipcode }}</p>
    </div>
    <base-text-filled-button class="address-card__button">
      EDIT
    </base-text-filled-button>
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';

export default {
  name: 'AddressBookCard',

  components: {
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
}
</style>
