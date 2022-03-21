<template>
  <form class="profile-info" novalidate @submit.prevent="onSubmitValidateForm">
    <img class="profile-info__avatar" :src="defaultAvatar" />
    <profile-form
      category="First Name"
      :error="firstNameError"
      :class="onInputValidateField('firstName')"
      v-on="{ 'input-blur': onBlurChangeValue('firstName') }"
    />
    <profile-form
      category="Last Name"
      :error="lastNameError"
      :class="onInputValidateField('lastName')"
      v-on="{ 'input-blur': onBlurChangeValue('lastName') }"
    />
    <SelectField category-name="Gender" :categories="['male', 'female']" />
    <profile-form category="Date of birth" />
    <profile-form category="Phone number" />
    <profile-form
      category="Email"
      :class="onInputValidateField('email')"
      v-on="{ 'input-blur': onBlurChangeValue('email') }"
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
import { MIN_NAME_LENGTH, NAME_VALID, EMAIL_VALID, formMixin } from './helper';

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

      validData: {
        hasFirstName: false,
        hasLastName: false,
        hasEmail: false
      }
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
    }
  },

  methods: {
    onBlurChangeValue(category) {
      return (inputValue) => {
        this[category] = inputValue;
      };
    },

    failedValidData(hasCategory) {
      this.validData[hasCategory] = false;
    },

    successValidData(hasCategory) {
      this.validData[hasCategory] = true;
    }
  },

  validations: {
    firstName: NAME_VALID,
    lastName: NAME_VALID,
    email: EMAIL_VALID
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-info {
  width: 400px;
  margin: 50px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .sign-in__error {
    text-align: center;
    color: $error;
  }

  &__avatar {
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
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
