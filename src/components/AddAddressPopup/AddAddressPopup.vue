<template>
  <div
    v-if="isPopupVisible"
    class="popup-modal-wrapper"
    @click="onClickClosePopup"
  >
    <div class="popup-container" @click.stop>
      <div class="popup-container__header">
        <h1 class="popup-container__header__title">Add new address</h1>

        <v-btn color="primary" icon text @click="onClickClosePopup">
          <v-icon> close </v-icon>
        </v-btn>
      </div>

      <v-form v-model="valid" @submit.prevent="onSubmit">
        <div class="form_wrapper">
          <v-row>
            <v-col class="form-title" md="2">
              <v-select
                v-model="userdata.title"
                :items="selectTitle"
                label="Title"
                :rules="noEmptyFieldsRule"
                required
              ></v-select>
            </v-col>

            <v-col md="5">
              <v-text-field
                v-model="userdata.name"
                :rules="nameSurnameRules"
                label="Name"
                required
              ></v-text-field>
            </v-col>

            <v-col md="5">
              <v-text-field
                v-model="userdata.surname"
                :rules="nameSurnameRules"
                label="Surname"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="3">
              <v-select
                v-model="userdata.phoneNumberCode"
                :items="selectPhoneCode"
                :rules="noEmptyFieldsRule"
                label="Code"
                required
                prepend-inner-icon="phone"
              ></v-select>
            </v-col>

            <v-col md="9">
              <v-text-field
                v-model="userdata.phoneNumber"
                v-mask="'(###)###-##-######'"
                :rules="phoneRules"
                label="Phone number"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6">
              <v-autocomplete
                v-model="userdata.country"
                :items="selectCountry"
                label="Country"
                :rules="noEmptyFieldsRule"
                persistent-hint
                required
                @change="changeCityList"
              ></v-autocomplete>
            </v-col>

            <v-col md="6">
              <v-autocomplete
                v-model="userdata.city"
                :items="selectCity"
                label="City"
                :rules="cityRules"
                persistent-hint
                required
                @input="changeCityList"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <v-text-field
                v-model="userdata.street"
                :rules="noEmptyFieldsRule"
                label="Street"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="6">
              <v-text-field
                v-model="userdata.building"
                label="Building"
                :rules="noEmptyFieldsRule"
                required
              ></v-text-field>
            </v-col>

            <v-col md="6">
              <v-text-field
                v-model="userdata.flat"
                label="Flat"
                :rules="flatRules"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col md="12">
              <v-text-field
                v-model="userdata.zip"
                :rules="zipRules"
                :counter="10"
                label="Zip"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>

        <v-card-actions>
          <base-text-filled-button
            class="form_wrapper__submit-button"
            :disabled="!valid"
            type="submit"
          >
            ADD
          </base-text-filled-button>
        </v-card-actions>
      </v-form>
    </div>
  </div>
</template>

<script>
import addressDataMock from './addressDataMock.json';
import { TITLE, PHONECODESLIST } from './helper';
import { BaseTextFilledButton } from '@/base_components';

export default {
  name: 'AddAddressPopup',

  components: { BaseTextFilledButton },

  props: {
    isPopupVisible: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    userdata: {
      title: '',
      name: '',
      surname: '',
      phoneNumberCode: '',
      phoneNumber: '',
      country: '',
      city: '',
      street: '',
      building: '',
      flat: '',
      zip: ''
    },
    selectTitle: TITLE,
    selectCountry: Object.keys(addressDataMock),
    selectPhoneCode: PHONECODESLIST,
    selectCity: null,
    isSpacesAllowed: false,
    isLettersAllowed: false,
    isEmptyFieldAllowed: false,
    maxZipLength: 10,
    minZipLength: 5,
    minNameLength: 2,
    minPhoneLength: 15,
    valid: false
  }),

  computed: {
    noEmptyFields() {
      if (!this.isEmptyFieldAllowed) {
        return (fieldValue) => !!fieldValue || 'This field is required';
      }

      return 'ok';
    },

    onlyCharacters() {
      if (!this.isLettersAllowed) {
        return (fieldValue) =>
          /^\D+$/.test(fieldValue) || 'Only characters required';
      }

      return true;
    },

    minName() {
      if (this.minNameLength) {
        return (fieldValue) =>
          (fieldValue || '').length >= this.minNameLength ||
          'A minimum of 2 characters is allowed';
      }

      return true;
    },

    minPhone() {
      if (this.userdata.phoneNumber.length < this.minPhoneLength) {
        return 'A minimum of 10 characters is allowed';
      }

      return true;
    },

    noSpaceAllowed() {
      if (!this.isSpacesAllowed) {
        return (fieldValue) =>
          (fieldValue || '').indexOf(' ') < 0 || 'No spaces allowed';
      }

      return false;
    },

    onlyNumbers() {
      if (!this.isLettersAllowed) {
        return (fieldValue) =>
          /^\d+$/.test(fieldValue) || 'Only numbers allowed';
      }

      return false;
    },

    noSpaces() {
      if (!this.isSpacesAllowed) {
        return (v) => (v || '').indexOf(' ') < 0 || 'No spaces are allowed';
      }

      return true;
    },

    selectCountryFirst() {
      if (!this.userdata.country) {
        return 'Please, select the country first';
      }

      return true;
    },

    zipCodeNumbersDash() {
      if (!this.isLettersAllowed) {
        return (fieldValue) =>
          /^\d+(-\d+)*$/.test(fieldValue) ||
          'Only numbers and a single dash is allowed';
      }

      return true;
    },

    zipCodeMaxCount() {
      if (this.userdata.zip.length > this.maxZipLength) {
        return `A maximum of ${this.maxZipLength} characters is allowed`;
      }

      return true;
    },
    zipCodeMinCount() {
      if (this.userdata.zip.length < this.minZipLength) {
        return `A minimum of ${this.minZipLength} characters is allowed`;
      }

      return true;
    },

    noEmptyFieldsRule() {
      return [this.noEmptyFields];
    },

    nameSurnameRules() {
      return [this.noEmptyFields, this.onlyCharacters, this.minName];
    },

    phoneRules() {
      return [this.noEmptyFields, this.minPhone];
    },

    flatRules() {
      return [this.noEmptyFields, this.noSpaces, this.onlyNumbers];
    },

    cityRules() {
      return [this.selectCountryFirst, this.noEmptyFields];
    },

    zipRules() {
      return [
        this.noEmptyFields,
        this.zipCodeMaxCount,
        this.zipCodeNumbersDash,
        this.zipCodeMinCount
      ];
    }
  },

  methods: {
    onSubmit() {},

    onClickTogglePopup() {
      this.props.isPopupVisible = !this.props.isPopupVisible;
    },

    onClickClosePopup() {
      this.$emit('onClickClosePopup');
    },
    changeCityList() {
      this.selectCity = addressDataMock[this.userdata.country];
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.popup-modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-popup;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-container {
  position: relative;
  width: 600px;
  margin: auto;
  padding: 20px;
  background-color: $white;
  border-radius: 5px;

  &__header {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;

    &__title {
      font-weight: normal;
    }
  }
}

.form_wrapper {
  width: 100%;
  padding: 20px 20px;

  &__submit-button {
    width: 100%;
  }
}

@media (max-width: $tablet-size) {
  .popup-container {
    width: 400px;

    &__header {
      justify-content: right;

      &__title {
        display: none;
      }
    }
  }

  .form_wrapper {
    width: 100%;
    padding: 20px 20px;
  }

  .form-title {
    flex-basis: 100%;
  }
}
</style>
