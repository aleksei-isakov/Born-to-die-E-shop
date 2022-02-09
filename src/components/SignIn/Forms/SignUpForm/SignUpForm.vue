<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-dialog-content class="sign-in__fields-container">
      <md-field :class="onInputValidateField('firstName')">
        <label>First name</label>
        <md-input v-model="firstName"></md-input>
        <span class="md-error" v-if="!$v.firstName.required"
          >The first name is required</span
        >
        <span class="md-error" v-else-if="!$v.firstName.alpha"
          >Must contain only latin letters.</span
        >
        <span class="md-error" v-else-if="!$v.firstName.minLength"
          >Must contain at least {{ MIN_NAME_LENGTH }} symbols.</span
        >
      </md-field>
      <md-field :class="onInputValidateField('lastName')">
        <label>Last name</label>
        <md-input v-model="lastName"></md-input>
        <span class="md-error" v-if="!$v.lastName.required"
          >The last name is required</span
        >
        <span class="md-error" v-else-if="!$v.lastName.alpha"
          >Must contain only latin letters.</span
        >
        <span class="md-error" v-else-if="!$v.lastName.minLength"
          >Must contain at least {{ MIN_NAME_LENGTH }} symbols.</span
        >
      </md-field>
      <md-field :class="onInputValidateField('email')">
        <label>Email</label>
        <md-input v-model="email"></md-input>
        <span class="md-error" v-if="!$v.email.required"
          >The email is required</span
        >
        <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
      </md-field>
      <md-field md-has-password :class="onInputValidateField('password')">
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
        <span class="md-error" v-if="!$v.password.required"
          >The password is required</span
        >
        <span class="md-error" v-else-if="!$v.password.minLength"
          >Must contain at least {{ MIN_PASSWORD_LENGTH }} symbols.</span
        >
        <span class="md-error" v-else-if="!$v.password.valid"
          >Invalid password</span
        >
        <span class="md-error" v-else-if="!$v.password.sameAsPassword"
          >Passwords don't match.</span
        >
      </md-field>
      <md-field
        md-has-password
        :class="onInputValidateField('passwordConfirm')"
      >
        <label>Confirm password</label>
        <md-input v-model="passwordConfirm" type="password"></md-input>
        <span class="md-error" v-if="!$v.passwordConfirm.required"
          >The password confirmation is required</span
        >
        <span class="md-error" v-else-if="!$v.passwordConfirm.sameAsPassword"
          >Passwords don't match.</span
        >
      </md-field>
    </md-dialog-content>
    <md-dialog-actions>
      <FilledButton
        type="submit"
        class="sign-in__submit-button"
        :class="{ disabled: !isFormCompleted }"
        :disabled="!isFormCompleted"
      >
        Sign Up
      </FilledButton>
    </md-dialog-actions>
  </form>
</template>

<script>
import { FilledButton } from '@/base_components';
import { validationMixin } from 'vuelidate';

import {
  MIN_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  FIRST_NAME_VALID,
  LAST_NAME_VALID,
  PASSWORD_VALID,
  EMAIL_VALID,
  PASSWORD_CONFIRM_VALID,
  formMixin
} from '../helper';

export default {
  name: 'SignUpForm',

  components: {
    FilledButton
  },

  mixins: [validationMixin, formMixin],

  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordConfirm: null
    };
  },

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
    this.MIN_NAME_LENGTH = MIN_NAME_LENGTH;
  },

  computed: {
    isFormCompleted: function () {
      return (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.password &&
        this.passwordConfirm
      );
    }
  },

  methods: {
    onValidateEnter() {
      this.$emit('on-validate-sign-up');
    }
  },

  validations: {
    firstName: FIRST_NAME_VALID,
    lastName: LAST_NAME_VALID,
    email: EMAIL_VALID,
    password: PASSWORD_VALID,
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
