<template>
  <md-dialog
    :md-active.sync="isPopupOpenedData"
    :md-fullscreen="false"
    @md-clicked-outside="onClickCloseSignInPopup"
  >
    <md-button
      class="md-icon-button md-primary sign-in__close-button"
      @click="onClickCloseSignInPopup"
    >
      <md-icon>close</md-icon>
    </md-button>
    <md-tabs
      class="md-content md-elevation-3 md-theme-default"
      md-dynamic-height
      md-alignment="centered"
    >
      <md-tab md-label="Sign In">
        <form novalidate @submit.prevent="onClickValidateSignInForm">
          <md-dialog-content>
            <md-field :class="onInputValidateSignInField('email')">
              <label>E-mail</label>
              <md-input
                v-model="signInForm.email"
                type="email"
                autocomplete="email"
              ></md-input>
              <span class="md-error" v-if="!$v.signInForm.email.required"
                >The email is required</span
              >
              <span class="md-error" v-else-if="!$v.signInForm.email.email"
                >Incorrect password or email</span
              >
            </md-field>
            <md-field
              :class="onInputValidateSignInField('password')"
              md-has-password
            >
              <label>Password</label>
              <md-input
                v-model="signInForm.password"
                type="password"
              ></md-input>
              <span class="md-error" v-if="!$v.signInForm.password.required"
                >The password is required</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signInForm.password.minLength"
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
              :disabled="!isSignInFormCompleted"
              >Sign in</md-button
            >
          </md-dialog-actions>
        </form>
      </md-tab>
      <md-tab md-label="Sign Up">
        <form novalidate @submit.prevent="onClickValidateSignUpForm">
          <md-dialog-content>
            <md-field :class="onInputValidateSignUpField('firstName')">
              <label>First name</label>
              <md-input v-model="signUpForm.firstName"></md-input>
              <span class="md-error" v-if="!$v.signUpForm.firstName.required"
                >The first name is required</span
              >
              <span class="md-error" v-else-if="!$v.signUpForm.firstName.alpha"
                >Must contain only latin letters.</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signUpForm.firstName.minLength"
                >Must contain at least {{ MIN_NAME_LENGTH }} symbols.</span
              >
            </md-field>
            <md-field :class="onInputValidateSignUpField('lastName')">
              <label>Last name</label>
              <md-input v-model="signUpForm.lastName"></md-input>
              <span class="md-error" v-if="!$v.signUpForm.lastName.required"
                >The last name is required</span
              >
              <span class="md-error" v-else-if="!$v.signUpForm.lastName.alpha"
                >Must contain only latin letters.</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signUpForm.lastName.minLength"
                >Must contain at least {{ MIN_NAME_LENGTH }} symbols.</span
              >
            </md-field>
            <md-field :class="onInputValidateSignUpField('email')">
              <label>Email</label>
              <md-input v-model="signUpForm.email"></md-input>
              <span class="md-error" v-if="!$v.signUpForm.email.required"
                >The email is required</span
              >
              <span class="md-error" v-else-if="!$v.signUpForm.email.email"
                >Invalid email</span
              >
            </md-field>
            <md-field
              md-has-password
              :class="onInputValidateSignUpField('password')"
            >
              <label>Password</label>
              <md-input
                v-model="signUpForm.password"
                type="password"
              ></md-input>
              <span class="md-error" v-if="!$v.signUpForm.password.required"
                >The password is required</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signUpForm.password.minLength"
                >Must contain at least {{ MIN_PASSWORD_LENGTH }} symbols.</span
              >
              <span class="md-error" v-else-if="!$v.signUpForm.password.valid"
                >Invalid password</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signUpForm.password.sameAsPassword"
                >Passwords don't match.</span
              >
            </md-field>
            <md-field
              md-has-password
              :class="onInputValidateSignUpField('passwordConfirm')"
            >
              <label>Confirm password</label>
              <md-input
                v-model="signUpForm.passwordConfirm"
                type="password"
              ></md-input>
              <span
                class="md-error"
                v-if="!$v.signUpForm.passwordConfirm.required"
                >The password confirmation is required</span
              >
              <span
                class="md-error"
                v-else-if="!$v.signUpForm.passwordConfirm.sameAsPassword"
                >Passwords don't match.</span
              >
            </md-field>
          </md-dialog-content>
          <md-dialog-actions>
            <md-button
              type="submit"
              class="sign-in__submit-button md-raised md-primary"
              :disabled="!isSignUpFormCompleted"
              >Sign up</md-button
            >
          </md-dialog-actions>
        </form>
      </md-tab>
    </md-tabs>
  </md-dialog>
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
import { MIN_PASSWORD_LENGTH, MIN_NAME_LENGTH } from './helper';

export default {
  name: 'SignInPopup',

  mixins: [validationMixin],

  data() {
    return {
      isPopupOpenedData: this.isPopupOpened,

      signInForm: {
        email: null,
        password: null
      },

      signUpForm: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirm: null
      },
      isUserRemembered: false
    };
  },

  watch: {
    isPopupOpened(val) {
      this.isPopupOpenedData = val;
    }
  },

  created() {
    this.MIN_PASSWORD_LENGTH = MIN_PASSWORD_LENGTH;
    this.MIN_NAME_LENGTH = MIN_NAME_LENGTH;
  },

  computed: {
    isSignInFormCompleted: function () {
      return this.signInForm.email && this.signInForm.password;
    },

    isSignUpFormCompleted: function () {
      return (
        this.signUpForm.firstName &&
        this.signUpForm.lastName &&
        this.signUpForm.email &&
        this.signUpForm.password &&
        this.signUpForm.passwordConfirm
      );
    }
  },

  props: {
    isPopupOpened: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  methods: {
    onClickCloseSignInPopup() {
      this.$emit('onClickCloseSignInPopup');
    },

    signIn() {
      console.log('You signed in!');
      this.$emit('signIn');
      this.onClickCloseSignInPopup();
    },

    signUp() {
      console.log('You signed up!');
      this.$emit('signUp');
      this.onClickCloseSignInPopup();
    },

    onInputValidateSignInField(fieldName) {
      const field = this.$v.signInForm[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },

    onInputValidateSignUpField(fieldName) {
      const field = this.$v.signUpForm[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },

    onClickValidateSignInForm() {
      this.$v.signInForm.$touch();

      if (!this.$v.signInForm.$invalid) {
        this.signIn();
      }
    },

    onClickValidateSignUpForm() {
      this.$v.signUpForm.$touch();

      if (!this.$v.signUpForm.$invalid) {
        this.signUp();
      }
    }
  },

  validations: {
    signInForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(MIN_PASSWORD_LENGTH)
      }
    },
    signUpForm: {
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
  }
};
</script>

<style lang="scss" scoped>
.sign-in__close-button {
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 6;
}

.sign-in__submit-button {
  margin-top: 25px;
  border-radius: 5px;
}
</style>

<style lang="scss">
@import '@/scss/variables.scss';

.md-dialog-container {
  width: 60%;
  max-width: 600px;
  border-radius: 5px;
}

.md-tabs {
  padding-top: 10px;
}

.md-tabs-navigation .md-ripple {
  padding: 0 50px;
}

.md-checkbox {
  margin: 0;
}

.md-dialog-content:first-child {
  padding: 10px 40px 0;
}

.md-dialog-actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 40px 30px;
}

.md-icon.md-theme-default.md-icon-image svg {
  fill: $primary;
}

.md-button:not([disabled]):hover:before {
  background-color: $primary;
}

@media (max-width: 768px) {
  .md-dialog-container {
    width: 80%;
    max-width: 500px;
  }

  .md-tabs-navigation .md-ripple {
    padding: 0 10px;
  }

  .md-dialog-content:first-child {
    padding: 0 20px;
  }

  .md-dialog-actions {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 20px;
  }
}
</style>
