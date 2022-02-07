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
      <BaseButton
        type="submit"
        class="sign-in__submit-button md-raised md-primary"
        :class="{ disabled: !isFormCompleted }"
        :disabled="!isFormCompleted"
      >
        Sign In
      </BaseButton>
    </md-dialog-actions>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { MIN_PASSWORD_LENGTH, EMAIL_VALID, PASSWORD_VALID } from '../helper';
import { BaseButton } from '@/base_components';

export default {
  name: 'SignInForm',

  components: {
    BaseButton
  },

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
    email: EMAIL_VALID,
    password: PASSWORD_VALID
  }
};
</script>
