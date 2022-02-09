<template>
  <form novalidate @submit.prevent="onSubmitValidateForm">
    <md-dialog-content class="sign-in__fields-container">
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
        <span class="md-error" v-else-if="!$v.password.valid"
          >Invalid password</span
        >
      </md-field>
    </md-dialog-content>
    <md-dialog-actions class="sign-in__actions">
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
    </md-dialog-actions>
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

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
  },

  computed: {
    isFormCompleted: function () {
      return this.email && this.password;
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
.sign-in__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sign-in__submit-button {
  margin: 30px 0 10px;
  width: 100%;
}

.sign-in__fields-container {
  padding-bottom: 0;
}
</style>
