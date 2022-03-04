<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-field :class="onInputValidateField('firstName')">
      <label>First name</label>
      <md-input v-model="firstName"></md-input>
      <span class="md-error">{{ firstNameError }}</span>
    </md-field>
    <md-field :class="onInputValidateField('lastName')">
      <label>Last name</label>
      <md-input v-model="lastName"></md-input>
      <span class="md-error">{{ lastNameError }}</span>
    </md-field>
    <md-field :class="onInputValidateField('email')">
      <label>Email</label>
      <md-input v-model="email"></md-input>
      <span class="md-error">{{ emailError }}</span>
    </md-field>
    <md-field md-has-password :class="onInputValidateField('password')">
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
      <span class="md-error">{{ passwordError }}</span>
    </md-field>
    <md-field md-has-password :class="onInputValidateField('passwordConfirm')">
      <label>Confirm password</label>
      <md-input v-model="passwordConfirm" type="password"></md-input>
      <span class="md-error">{{ passwordConfirmError }}</span>
    </md-field>
    <div v-if="errorMessageRegister" class="sign-in__error">
      Email already exists
    </div>
    <base-text-filled-button
      type="submit"
      class="sign-in__submit-button"
      :class="{ disabled: !isFormCompleted }"
      :disabled="!isFormCompleted"
      @click="onClickSendRequest"
    >
      Sign Up
    </base-text-filled-button>
  </form>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import { validationMixin } from 'vuelidate';
import { mapActions, mapGetters } from 'vuex';

import {
  MIN_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  NAME_VALID,
  EMAIL_VALID,
  PASSWORD_WITH_CONFIRM_VALID,
  PASSWORD_CONFIRM_VALID,
  formMixin
} from '../helper';

export default {
  name: 'SignUpForm',

  components: {
    BaseTextFilledButton
  },

  mixins: [validationMixin, formMixin],

  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordConfirm: null,

      validData: {
        hasFirstName: false,
        hasLastName: false,
        hasEmail: false,
        hasPassword: false,
        hasPasswordConfirm: false
      }
    };
  },

  computed: {
    ...mapGetters('AuthenticationModule', [
      'currentUserInfo',
      'errorMessageRegister'
    ]),

    isFormCompleted() {
      return (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.password &&
        this.passwordConfirm
      );
    },

    isFormValid() {
      return (
        this.validData.hasFirstName &&
        this.validData.hasLastName &&
        this.validData.hasEmail &&
        this.validData.hasPassword &&
        this.validData.hasPasswordConfirm
      );
    },

    firstNameError() {
      if (!this.$v.firstName.required) {
        this.failedValidDataFirstName();

        return 'The first name is required';
      } else if (!this.$v.firstName.alpha) {
        this.failedValidDataFirstName();

        return 'Must contain only latin letters';
      } else if (!this.$v.firstName.minLength) {
        this.failedValidDataFirstName();

        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.successValidDataFirstName();
    },

    lastNameError() {
      if (!this.$v.lastName.required) {
        this.failedValidDataLastName();

        return 'The last name is required';
      } else if (!this.$v.lastName.alpha) {
        this.failedValidDataLastName();

        return 'Must contain only latin letters';
      } else if (!this.$v.lastName.minLength) {
        this.failedValidDataLastName();

        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.successValidDataLastName();
    },

    emailError() {
      if (!this.$v.email.required) {
        this.failedValidDataEmail();

        return 'The email is required';
      } else if (!this.$v.email.email) {
        this.failedValidDataEmail();

        return 'Invalid email';
      } else return this.successValidDataEmail();
    },

    passwordError() {
      if (!this.$v.password.required) {
        this.failedValidDataPassword();

        return 'The password is required';
      } else if (!this.$v.password.minLength) {
        this.failedValidDataPassword();

        return `Must contain at least ${MIN_PASSWORD_LENGTH} symbols.`;
      } else if (!this.$v.password.valid) {
        this.failedValidDataPassword();

        return 'Invalid password';
      } else if (!this.$v.password.sameAsPassword) {
        this.failedValidDataPassword();

        return "Passwords don't match.";
      } else return this.successValidDataPassword();
    },

    passwordConfirmError() {
      if (!this.$v.passwordConfirm.required) {
        this.failedValidDataPasswordConfirm();

        return 'The field is required';
      } else if (!this.$v.passwordConfirm.sameAsPassword) {
        this.failedValidDataPasswordConfirm();

        return "Passwords don't match.";
      } else return this.successValidDataPasswordConfirm();
    }
  },

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
    this.MIN_NAME_LENGTH = MIN_NAME_LENGTH;
  },

  methods: {
    ...mapActions('AuthenticationModule', ['registerUser']),

    onClickSendRequest() {
      if (this.isFormValid) {
        this.registerUser({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
      }
    },

    successValidDataFirstName() {
      this.validData.hasFirstName = true;
    },

    failedValidDataFirstName() {
      this.validData.hasFirstName = false;
    },

    successValidDataLastName() {
      this.validData.hasLastName = true;
    },

    failedValidDataLastName() {
      this.validData.hasLastName = false;
    },

    successValidDataEmail() {
      this.validData.hasEmail = true;
    },

    failedValidDataEmail() {
      this.validData.hasEmail = false;
    },

    successValidDataPassword() {
      this.validData.hasPassword = true;
    },

    failedValidDataPassword() {
      this.validData.hasPassword = false;
    },

    successValidDataPasswordConfirm() {
      this.validData.hasPasswordConfirm = true;
    },

    failedValidDataPasswordConfirm() {
      this.validData.hasPasswordConfirm = false;
    }
  },

  validations: {
    firstName: NAME_VALID,
    lastName: NAME_VALID,
    email: EMAIL_VALID,
    password: PASSWORD_WITH_CONFIRM_VALID,
    passwordConfirm: PASSWORD_CONFIRM_VALID
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.sign-in__submit-button {
  margin: 30px 0 10px;
  width: 100%;
}

.sign-in__fields-container {
  padding-bottom: 0;
}

.sign-in__error {
  text-align: center;
  color: $error;
}
</style>
