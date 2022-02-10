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
    <FilledButton
      type="submit"
      class="sign-in__submit-button"
      :class="{ disabled: !isFormCompleted }"
      :disabled="!isFormCompleted"
    >
      Sign In
    </FilledButton>
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
import { FilledButton } from '@/components/';

export default {
  name: 'SignInForm',

  components: {
    FilledButton
  },

  mixins: [validationMixin, formMixin],

  data() {
    return {
      email: null,
      password: null,
      isUserRemembered: false
    };
  },

  computed: {
    isFormCompleted: function () {
      return this.email && this.password;
    },

    emailError() {
      if (!this.$v.email.required) {
        return 'The email is required';
      } else if (!this.$v.email.email) {
        return 'Invalid email';
      } else return '';
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
      } else return '';
    }
  },

  methods: {
    onValidateEnter() {
      this.$emit('on-validate-enter');
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
