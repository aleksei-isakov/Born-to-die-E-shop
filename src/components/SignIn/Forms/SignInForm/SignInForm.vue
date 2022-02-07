<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-dialog-content>
      <md-field :class="onInputValidateField('email')">
        <label>E-mail</label>
        <md-input v-model="email" type="email" autocomplete="email"></md-input>
        <span class="md-error" v-if="!$v.email.required"
          >The email is required</span
        >
        <span class="md-error" v-else-if="!$v.email.email"
          >Incorrect password or email</span
        >
      </md-field>
      <md-field :class="onInputValidateField('password')" md-has-password>
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
        <span class="md-error" v-if="!$v.password.required"
          >The password is required</span
        >
        <span class="md-error" v-else-if="!$v.password.minLength"
          >Incorrect password or email</span
        >
      </md-field>
    </md-dialog-content>
    <md-dialog-actions>
      <md-checkbox v-model="isUserRemembered" class="md-primary"
        >Remember me</md-checkbox
      >
      <md-button
        type="submit"
        class="sign-in__submit-button md-raised md-primary"
        :disabled="!isFormCompleted"
        >Sign in</md-button
      >
    </md-dialog-actions>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';
import { MIN_PASSWORD_LENGTH } from '../helper';

export default {
  name: 'SignInForm',

  mixins: [validationMixin],

  data() {
    return {
      email: null,
      password: null,
      isUserRemembered: false
    };
  },

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
  },

  computed: {
    isFormCompleted: function () {
      return this.email && this.password;
    }
  },

  methods: {
    signIn() {
      this.$emit('sign-in');
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
        this.signIn();
      }
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(MIN_PASSWORD_LENGTH)
    }
  }
};
</script>
