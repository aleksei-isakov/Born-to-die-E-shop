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
import BaseTextFilledButton from '@/base_components/BaseTextButtons/BaseTextFilledButton';

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
    minPhoneLength: 10,
    valid: false
  }),

  computed: {
    noEmptyFieldsRule() {
      const rules = [];

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      return rules;
    },

    nameSurnameRules() {
      const rules = [];

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      if (!this.isLettersAllowed) {
        const rule = (v) => /^\D+$/.test(v) || 'Only characters required';

        rules.push(rule);
      }

      if (this.minNameLength) {
        const rule = (v) =>
          (v || '').length >= this.minNameLength ||
          `A minimum of ${this.minNameLength} characters is allowed`;

        rules.push(rule);
      }

      return rules;
    },

    phoneRules() {
      const rules = [];

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      if (!this.isSpacesAllowed) {
        const rule = (v) => (v || '').indexOf(' ') < 0 || 'No spaces allowed';

        rules.push(rule);
      }

      if (!this.isLettersAllowed) {
        const rule = (v) => /^(?=.*[0-9])[- +()0-9]+$/.test(v);

        rules.push(rule);
      }

      if (this.userdata.phoneNumber.length < this.minPhoneLength) {
        rules.push(`A minimum of ${this.minPhoneLength} characters is allowed`);
      }

      return rules;
    },

    flatRules() {
      const rules = [];

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      if (!this.isSpacesAllowed) {
        const rule = (v) =>
          (v || '').indexOf(' ') < 0 || 'No spaces are allowed';

        rules.push(rule);
      }

      if (!this.isLettersAllowed) {
        const rule = (v) => /^\d+$/.test(v) || 'Only numbers allowed';

        rules.push(rule);
      }

      return rules;
    },

    cityRules() {
      const rules = [];

      if (!this.userdata.country) {
        const rule = 'Please, select the country first';

        rules.push(rule);
      }

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      return rules;
    },

    zipRules() {
      const rules = [];

      if (!this.isEmptyFieldAllowed) {
        const rule = (v) => !!v || 'This field is required';

        rules.push(rule);
      }

      if (this.maxZipLength) {
        const rule = (v) =>
          (v || '').length <= this.maxZipLength ||
          `A maximum of ${this.maxZipLength} characters is allowed`;

        rules.push(rule);
      }

      if (this.minZipLength) {
        const rule = (v) =>
          (v || '').length >= this.minZipLength ||
          `A minimum of ${this.minZipLength} characters is allowed`;

        rules.push(rule);
      }

      if (!this.isLettersAllowed) {
        const rule = (v) =>
          /^\d+(-\d+)*$/.test(v) || 'Only numbers and a single dash is allowed';

        rules.push(rule);
      }

      return rules;
    }
  },

  methods: {
    onSubmit() {},

    onClickOpenPopup() {
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: $z-index-popup;
}

.popup-container {
  width: 600px;
  position: relative;
  background-color: #e6e6e6;
  margin: auto;
  border-radius: 5px;
  padding: 20px;

  &__header {
    display: flex;
    padding-left: 20px;
    justify-content: space-between;

    &__title {
      font-weight: normal;
    }
  }
}

.form_wrapper {
  padding: 20px 20px;
  width: 100%;

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
    padding: 20px 20px;
    width: 100%;
  }
  .form-title {
    flex-basis: 100%;
  }
}
</style>
