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
    <BaseTextFilledButton
      type="submit"
      class="sign-in__submit-button"
      :class="{ disabled: !isFormCompleted }"
      :disabled="!isFormCompleted"
      @click="onClickSendRequest"
    >
      Sign Up
    </BaseTextFilledButton>
  </form>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import { validationMixin } from 'vuelidate';

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
        return 'The first name is required';
      } else if (!this.$v.firstName.alpha) {
        return 'Must contain only latin letters';
      } else if (!this.$v.firstName.minLength) {
        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.changeValidDataFirstName();
    },

    lastNameError() {
      if (!this.$v.lastName.required) {
        return 'The last name is required';
      } else if (!this.$v.lastName.alpha) {
        return 'Must contain only latin letters';
      } else if (!this.$v.lastName.minLength) {
        return `Must contain at least ${MIN_NAME_LENGTH} symbols`;
      } else return this.changeValidDataLastName();
    },

    emailError() {
      if (!this.$v.email.required) {
        return 'The email is required';
      } else if (!this.$v.email.email) {
        return 'Invalid email';
      } else return this.changeValidDataEmail();
    },

    passwordError() {
      if (!this.$v.password.required) {
        return 'The password is required';
      } else if (!this.$v.password.minLength) {
        return `Must contain at least ${MIN_PASSWORD_LENGTH} symbols.`;
      } else if (!this.$v.password.valid) {
        return 'Invalid password';
      } else if (!this.$v.password.sameAsPassword) {
        return "Passwords don't match.";
      } else return this.changeValidDataPassword();
    },

    passwordConfirmError() {
      if (!this.$v.passwordConfirm.required) {
        return 'The field is required';
      } else if (!this.$v.passwordConfirm.sameAsPassword) {
        return "Passwords don't match.";
      } else return this.changeValidDataPasswordConfirm();
    }
  },

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
    this.MIN_NAME_LENGTH = MIN_NAME_LENGTH;
  },

  methods: {
    onValidateEnter() {
      this.$emit('on-validate-enter');
    },

    onClickSendRequest() {
      if (this.isFormValid) {
        this.$store.dispatch('AuthenticationModule/registerUser', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
      }
    },

    changeValidDataFirstName() {
      this.validData.hasFirstName = true;
    },

    changeValidDataLastName() {
      this.validData.hasLastName = true;
    },

    changeValidDataEmail() {
      this.validData.hasEmail = true;
    },

    changeValidDataPassword() {
      this.validData.hasPassword = true;
    },

    changeValidDataPasswordConfirm() {
      this.validData.hasPasswordConfirm = true;
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
.sign-in__submit-button {
  margin: 30px 0 10px;
  width: 100%;
}

.sign-in__fields-container {
  padding-bottom: 0;
}
</style>
