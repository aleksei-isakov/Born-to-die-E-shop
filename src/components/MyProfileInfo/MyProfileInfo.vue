<template>
  <div v-if="currentUserInfo">
    <form
      class="profile-info"
      novalidate
      @submit.prevent="onSubmitValidateForm"
    >
      <img class="profile-info__avatar" :src="defaultAvatar" />
      <profile-form
        ref="cancelFirstNameChanges"
        category="First Name"
        :error="firstNameError"
        :class="onInputValidateField('firstName')"
        :user="getFirstName"
        @input="(inputValue) => onInputChangeValue('firstName', inputValue)"
      />
      <profile-form
        ref="cancelLastNameChanges"
        category="Last Name"
        :error="lastNameError"
        :user="getLastName"
        :class="onInputValidateField('lastName')"
        @input="(inputValue) => onInputChangeValue('lastName', inputValue)"
      />
      <select-field
        ref="cancelGenderChanges"
        category-name="Gender"
        :categories="genders"
        class="profile-info__select"
        :current-gender-index="getCurrentUserIndex"
        @setGender="setGender"
      />
      <md-datepicker
        :key="helperForCancelChanges"
        v-model="getDate"
        :md-open-on-focus="false"
        class="profile-info__calendar"
        :md-disabled-dates="isDateDisabled"
      >
        <div class="profile-info__date-category">Date of birth</div>
      </md-datepicker>
      <profile-form
        ref="cancelPhoneNumberChanges"
        category="Phone number"
        :error="phoneError"
        :user="getPhoneNumber"
        :class="onInputValidateField('phoneNumber')"
        @input="(inputValue) => onInputChangeValue('phoneNumber', inputValue)"
      />
      <profile-form
        ref="cancelEmailChanges"
        category="Email"
        :error="emailError"
        :user="getEmail"
        :class="onInputValidateField('email')"
        @input="(inputValue) => onInputChangeValue('email', inputValue)"
      />
      <div class="profile-info__buttons">
        <base-button
          class="profile-info__button save"
          type="submit"
          @click="onClickChangeSaveNewUserInfo"
          >SAVE
        </base-button>
        <base-button class="profile-info__button cancel" @click="cancelChanges"
          >CANCEL
        </base-button>
      </div>
    </form>
  </div>
  <div v-else>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script>
import defaultAvatar from '@/assets/defaultAvatar.png';
import ProfileForm from './ProfileForm.vue';
import SelectField from '@/components/SelectField/SelectField.vue';
import { BaseButton } from '@/base_components';
import { validationMixin } from 'vuelidate';
import { mapActions, mapGetters } from 'vuex';
import {
  EMAIL_VALID,
  formMixin,
  MIN_NAME_LENGTH,
  NAME_VALID,
  PHONE_VALID
} from './helper';

const GENDERS = ['not specified', 'male', 'female'];

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
      userGender: '',
      genders: GENDERS,
      userIndex: '',
      helperForCancelChanges: 0,

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
    ...mapGetters('AuthenticationModule', ['currentUserInfo']),

    getDate: {
      set: function (val) {
        this.selectedDate = new Date(val);
      },

      get: function () {
        return new Date(this.currentUserInfo.user.birthDate);
      }
    },

    getFirstName: {
      set: function (val) {
        this.firstName = val;
      },

      get: function () {
        return this.currentUserInfo.user.firstName;
      }
    },

    getLastName: {
      set: function (val) {
        this.lastName = val;
      },

      get: function () {
        return this.currentUserInfo.user.lastName;
      }
    },

    getEmail: {
      set: function (val) {
        this.email = val;
      },

      get: function () {
        return this.currentUserInfo.user.email;
      }
    },

    getPhoneNumber: {
      set: function (val) {
        this.phoneNumber = val;
      },

      get: function () {
        return this.currentUserInfo.user.phoneNumber;
      }
    },

    firstNameError() {
      if (!this.$v.firstName.required) {
        this.failedValidData('hasFirstName');

        return 'The first name is required';
      }

      if (!this.$v.firstName.minLength || !this.$v.firstName.alpha) {
        this.failedValidData('hasFirstName');

        return `Must contain only latin letters, at least ${MIN_NAME_LENGTH} symbols`;
      }

      return this.successValidData('hasFirstName');
    },

    lastNameError() {
      if (!this.$v.lastName.required) {
        this.failedValidData('hasLastName');

        return 'The last name is required';
      }

      if (!this.$v.lastName.minLength || !this.$v.lastName.alpha) {
        this.failedValidData('hasLastName');

        return `Must contain only latin letters, at least ${MIN_NAME_LENGTH} symbols`;
      }

      return this.successValidData('hasLastName');
    },

    emailError() {
      if (!this.$v.email.required) {
        this.failedValidData('hasEmail');

        return 'The email is required';
      }

      if (!this.$v.email.email) {
        this.failedValidData('hasEmail');

        return 'Invalid email';
      }

      return this.successValidData('hasEmail');
    },

    phoneError() {
      if (!this.$v.phoneNumber.minLength) {
        this.failedValidData('hasPhoneNumber');

        return 'Too short number';
      }

      return this.successValidData('hasPhoneNumber');
    },

    getCurrentUserIndex() {
      this.setGenderIndex();

      return this.userIndex;
    }
  },

  methods: {
    ...mapActions('AuthenticationModule', ['getUserInfo', 'updateUserInfo']),

    onInputChangeValue(category, inputValue) {
      this[category] = inputValue;
    },

    setGenderIndex() {
      if (!this.userIndex && this.userIndex !== 0) {
        this.userIndex = this.genders.indexOf(this.currentUserInfo.user.gender);
      }
    },

    setGender(value) {
      this.userIndex = value;
      this.userGender = this.genders[value];
    },

    onClickChangeSaveNewUserInfo() {
      this.email = this.email || this.currentUserInfo.user.email;
      this.firstName = this.firstName || this.currentUserInfo.user.firstName;
      this.lastName = this.lastName || this.currentUserInfo.user.lastName;
      this.phoneNumber =
        this.phoneNumber || this.currentUserInfo.user.phoneNumber;

      if (this.phoneNumber === '+') {
        this.phoneNumber = '';
      }

      this.updateUserInfo({
        email: this.email || this.currentUserInfo.user.email,
        firstName: this.firstName || this.currentUserInfo.user.firstName,
        lastName: this.lastName || this.currentUserInfo.user.lastName,
        phoneNumber: this.phoneNumber,
        gender: this.userGender || this.currentUserInfo.user.gender,
        birthDate:
          new Date(this.selectedDate) || this.currentUserInfo.user.birthDate
      });
    },

    failedValidData(hasCategory) {
      this.validData[hasCategory] = false;
    },

    successValidData(hasCategory) {
      this.validData[hasCategory] = true;
    },

    cancelChanges() {
      this.$refs.cancelFirstNameChanges.cancelChanges();
      this.$refs.cancelLastNameChanges.cancelChanges();
      this.$refs.cancelPhoneNumberChanges.cancelChanges();
      this.$refs.cancelEmailChanges.cancelChanges();
      this.userIndex = this.genders.indexOf(this.currentUserInfo.user.gender);
      this.$refs.cancelGenderChanges.cancelGenderChanges(
        this.genders.indexOf(this.currentUserInfo.user.gender)
      );
      this.helperForCancelChanges = this.helperForCancelChanges + 1;
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
  max-width: 700px;
  padding: 25px 80px 10px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  @media screen and (max-width: $tablet-size) {
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .sign-in__error {
    text-align: center;
    color: $error;
  }

  &__calendar {
    width: 100%;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 5px;
    margin: 30px 0 0 0;
    padding: 0;
    height: 6vh;
    align-items: center;
    position: relative;
    z-index: 1;
    max-width: 450px;
    max-height: 50px;
    min-height: 0;

    &.md-field::v-deep .md-button {
      top: 2px;
    }

    &.md-field::after::v-deep {
      height: 0;
    }

    &.md-field::v-deep .md-icon::after {
      height: 0;
    }

    .profile-info__date-category {
      position: absolute;
      background-color: $white;
      color: #b3b4b6;
      padding: 0 5px;
      font-size: 12px;
      top: -8px;
      left: 30px;
    }
  }

  &__select {
    width: 100%;
    position: relative;
    z-index: 2;
    margin-top: 30px;
    max-width: 450px;

    &::v-deep .select-field__category {
      left: 30px;
    }

    &::v-deep .select-field {
      width: 100%;
      padding: 0 0 0 inherit;
      margin: 30px 0 0 0;
    }

    &::v-deep .select-field__button {
      height: 6vh;
      max-height: 50px;
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
