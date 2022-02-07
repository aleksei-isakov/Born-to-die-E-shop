<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-dialog-content>
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
      <md-button
        type="submit"
        class="sign-in__submit-button md-raised md-primary"
        :disabled="!isFormCompleted"
        >Sign up</md-button
      >
    </md-dialog-actions>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
  alpha,
  required,
  email,
  minLength,
  sameAs
} from 'vuelidate/lib/validators';
import { MIN_PASSWORD_LENGTH, MIN_NAME_LENGTH } from '../helper';

export default {
  name: 'SignUpForm',

  mixins: [validationMixin],

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
    signUp() {
      this.$emit('sign-up');
    },

    onInputValidateField(fieldName) {
      const field = this.$v[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },

    onSubmitValidateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.signUp();
      }
    }
  },

  validations: {
    firstName: {
      required,
      alpha,
      minLength: minLength(MIN_NAME_LENGTH)
    },
    lastName: {
      required,
      alpha,
      minLength: minLength(MIN_NAME_LENGTH)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(MIN_PASSWORD_LENGTH),
      valid: (password) => {
        return (
          /[a-z]/.test(password) &&
          /[A-Z]/.test(password) &&
          /[0-9]/.test(password) &&
          /[^A-Za-z0-9]/.test(password)
        );
      },
      sameAsPassword: sameAs('passwordConfirm')
    },
    passwordConfirm: {
      required,
      sameAsPassword: sameAs('password')
    }
  }
};
</script>
