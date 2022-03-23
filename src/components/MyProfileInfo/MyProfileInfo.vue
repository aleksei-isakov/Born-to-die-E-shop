<template>
  <form class="profile-info" novalidate @submit.prevent="onSubmitValidateForm">
    <img class="profile-info__avatar" :src="defaultAvatar" />
    <profile-form
      category="First Name"
      :error="firstNameError"
      :class="onInputValidateField('firstName')"
      v-on="{ input: onInputChangeValue('firstName') }"
    />
    <profile-form
      category="Last Name"
      :error="lastNameError"
      :class="onInputValidateField('lastName')"
      v-on="{ input: onInputChangeValue('lastName') }"
    />
    <SelectField
      category-name="Gender"
      :categories="['not specified', 'male', 'female']"
      class="profile-info__select"
    />
    <md-datepicker
      v-model="selectedDate"
      :md-open-on-focus="false"
      class="profile-info__calendar"
      :md-disabled-dates="isDateDisabled"
    >
      <div class="profile-info__date-category">Date of birth</div>
    </md-datepicker>
    <profile-form
      category="Phone number"
      :error="phoneError"
      :class="onInputValidateField('phoneNumber')"
      v-on="{ input: onInputChangeValue('phoneNumber') }"
    />
    <profile-form
      category="Email"
      :error="emailError"
      :class="onInputValidateField('email')"
      v-on="{ input: onInputChangeValue('email') }"
    />
    <div class="profile-info__buttons">
      <base-button class="profile-info__button save" type="submit"
        >SAVE</base-button
      >
      <base-button class="profile-info__button cancel">CANCEL</base-button>
    </div>
  </form>
</template>

<script>
import defaultAvatar from '@/assets/defaultAvatar.png';
import ProfileForm from './ProfileForm.vue';
import SelectField from './SelectField.vue';
import { BaseButton } from '@/base_components';
import { validationMixin } from 'vuelidate';
import {
  MIN_NAME_LENGTH,
  NAME_VALID,
  EMAIL_VALID,
  formMixin,
  PHONE_VALID
} from './helper';

export default {
  name: 'MyProfileInfo',

  components: {
    ProfileForm,
    BaseButton,
    SelectField
  },

  mixins: [validationMixin, formMixin],

  data() {
    return {
      defaultAvatar: defaultAvatar,
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',

      validData: {
        hasFirstName: false,
        hasLastName: false,
        hasEmail: false,
        hasPhoneNumber: false
      },

      selectedDate: null
    };
  },

  computed: {
    firstNameError() {
      if (!this.$v.firstName.required) {
        this.failedValidData('hasFirstName');

        return 'The first name is required';
      } else if (!this.$v.firstName.alpha) {
        this.failedValidData('hasFirstName');

        return 'Must contain only latin letters';
      } else if (!this.$v.firstName.minLength) {
        this.failedValidData('hasFirstName');

        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.successValidData('hasFirstName');
    },

    lastNameError() {
      if (!this.$v.lastName.required) {
        this.failedValidData('hasLastName');

        return 'The last name is required';
      } else if (!this.$v.lastName.alpha) {
        this.failedValidData('hasLastName');

        return 'Must contain only latin letters';
      } else if (!this.$v.lastName.minLength) {
        this.failedValidData('hasLastName');

        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.successValidData('hasLastName');
    },

    emailError() {
      if (!this.$v.email.required) {
        this.failedValidData('hasEmail');

        return 'The email is required';
      } else if (!this.$v.email.email) {
        this.failedValidData('hasEmail');

        return 'Invalid email';
      } else return this.successValidData('hasEmail');
    },

    phoneError() {
      if (!this.$v.phoneNumber.minLength) {
        this.failedValidData('hasPhoneNumber');

        return 'Too short number';
      } else return this.successValidData('hasPhoneNumber');
    }
  },

  methods: {
    onInputChangeValue(category) {
      return (inputValue) => {
        this[category] = inputValue;
      };
    },

    failedValidData(hasCategory) {
      this.validData[hasCategory] = false;
    },

    successValidData(hasCategory) {
      this.validData[hasCategory] = true;
    },

    isDateDisabled(date) {
      return new Date() < date;
    }
  },

  validations: {
    firstName: NAME_VALID,
    lastName: NAME_VALID,
    email: EMAIL_VALID,
    phoneNumber: PHONE_VALID
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-info {
  max-width: 900px;
  margin: 5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: $mobile-size) {
    margin: 0;
  }

  .sign-in__error {
    text-align: center;
    color: $error;
  }

  &__calendar {
    width: 80%;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 5px;
    margin: 40px 0 0 0;
    height: 5vh;
    padding: 0;
    min-height: 40px;
    align-items: center;
    position: relative;

    &.md-field::v-deep .md-button {
      top: 2px;
    }

    &.md-field::after::v-deep {
      height: 0;
    }

    .profile-info__date-category {
      position: absolute;
      background-color: $white;
      color: #b3b4b6;
      padding: 0 5px 0 5px;
      font-size: 12px;
      top: -8px;
      left: 30px;
    }
  }

  &__select {
    width: 80%;
    position: relative;
    z-index: 5;

    &::v-deep .select-field__category {
      left: 30px;
    }
    &::v-deep .select-field {
      width: 100%;
      padding: 0 0 0 inherit;
      margin: 40px 0 0 0;
      height: 6vh;
    }
    &::v-deep .dropdown {
      width: 100%;
      position: absolute;
    }
  }

  &__avatar {
    border-radius: 50%;
    width: 20vh;
    height: 20vh;
    min-width: 100px;
    min-height: 100px;

    // @media screen and (max-width: $mobile-size) {
    //   width: 35vw;
    //   height: 35vw;
    // }
    // @media screen and (max-width: $tablet-size) {
    //   width: 30vw;
    //   height: 30vw;
    // }
  }

  .profile-info__buttons {
    margin: 10% 0;

    .profile-info__button {
      width: 100px;
      border: 0.5px solid $font-color-text;
      padding: 5px 0px;
      margin: 0px 10px;
      border-radius: 5px;
    }

    .save {
      color: $primary;
    }
    .cancel {
      color: $error;
    }
  }
}
</style>
