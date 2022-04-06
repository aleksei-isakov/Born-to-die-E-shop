<template>
  <div class="address-card">
    <div class="address-card__info">
      <p>
        {{ getName }} <br />
        {{ mockInfo[0].phone }}
      </p>
      <p>
        {{
          `${mockInfo[0].country}, ${mockInfo[0].city}, ${mockInfo[0].street}`
        }}
      </p>
      <p>{{ mockInfo[0].zipCode }}</p>
    </div>
    <base-text-button class="address-card__button"> EDIT </base-text-button>
  </div>
</template>

<script>
import { BaseTextButton } from '@/base_components/';
import addressBookCardMock from './addressBookCardMock.json';

export default {
  name: 'AddressBookCard',

  components: {
    BaseTextButton
  },

  data() {
    return {
      mockInfo: addressBookCardMock
    };
  },

  computed: {
    getName() {
      if (this.mockInfo[0].gender === 'male') {
        return `Mr. ${this.mockInfo[0].firstName} ${this.mockInfo[0].lastName}`;
      }

      return `Mrs. ${this.mockInfo[0].firstName} ${this.mockInfo[0].lastName}`;
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
    background-color: $primary;
    color: $white;
    box-shadow: $shadow;
  }
}
</style>
