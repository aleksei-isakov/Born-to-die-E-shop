<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-field :class="onInputValidateField('email')">
      <label>E-mail</label>
      <md-input v-model="email" type="email" autocomplete="email"></md-input>
      <span class="md-error">{{ emailError }}</span>
    </md-field>
    <md-field :class="onInputValidateField('password')" md-has-password>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
      <span class="md-error">{{ passwordError }}</span>
    </md-field>
    <md-checkbox v-model="isUserRemembered" class="md-primary"
      >Remember me</md-checkbox
    >
    <BaseTextFilledButton
      type="submit"
      class="sign-in__submit-button"
      :class="{ disabled: !isFormCompleted }"
      :disabled="!isFormCompleted"
      @click="onClickSendRequest"
    >
      Sign In
    </BaseTextFilledButton>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  MIN_PASSWORD_LENGTH,
  EMAIL_VALID,
  PASSWORD_VALID,
  formMixin
} from '@/components/SignIn/Forms/helper.js';
import { BaseTextFilledButton } from '@/base_components/';

export default {
  name: 'SignInForm',

  components: {
    BaseTextFilledButton
  },

  mixins: [validationMixin, formMixin],

  data() {
    return {
      email: null,
      password: null,
      isUserRemembered: false,

      validData: {
        hasEmail: false,
        hasPassword: false
      }
    };
  },

  computed: {
    isFormCompleted() {
      return this.email && this.password;
    },

    isFormValid() {
      return this.validData.hasEmail && this.validData.hasPassword;
    },

    emailError() {
      if (!this.$v.email.required) {
        this.failedValidDataEmaill();

        return 'The email is required';
      } else if (!this.$v.email.email) {
        this.failedValidDataEmaill();

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
      } else return this.successValidDataPassword();
    }
  },

  methods: {
    onValidateEnter() {
      this.$emit('on-validate-enter');
    },

    onClickSendRequest() {
      if (this.isFormValid) {
        this.$store.dispatch('AuthenticationModule/loginUser', {
          email: this.email,
          password: this.password
        });
      }
    },

    successValidDataEmail() {
      this.validData.hasEmail = true;
    },

    failedValidDataEmaill() {
      this.validData.hasEmail = false;
    },

    successValidDataPassword() {
      this.validData.hasPassword = true;
    },

    failedValidDataPassword() {
      this.validData.hasPassword = false;
    }
  },

  validations: {
    email: EMAIL_VALID,
    password: PASSWORD_VALID
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
