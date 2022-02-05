<template>
  <div
    v-if="isPopupOpened"
    class="sign-in__popup-shadow"
    @click.self="onClickCloseSignInPopup"
  >
    <div class="sign-in__popup" @click.stop>
      <md-button
        class="md-icon-button md-primary sign-in__close-button"
        @click="onClickCloseSignInPopup"
      >
        <md-icon>close</md-icon>
      </md-button>
      <md-tabs
        class="md-content md-elevation-3 md-theme-default"
        md-alignment="centered"
      >
        <md-tab md-label="Sign In">
          <md-field>
            <label>E-mail</label>
            <md-input v-model="signInData.email" autofocus></md-input>
          </md-field>
          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="signInData.password" type="password"></md-input>
          </md-field>

          <md-checkbox v-model="isUserRemembered" class="md-primary"
            >Remember me</md-checkbox
          >
          <md-button
            class="sign-in__submit-button md-raised md-primary"
            :disabled="!isSignInFormCompleted"
            @click="onClickSignIn"
            >Log in</md-button
          >
        </md-tab>
        <md-tab md-label="Sign Up">
          <md-field>
            <label>First name</label>
            <md-input v-model="signUpData.firstName" autofocus></md-input>
          </md-field>
          <md-field>
            <label>Last name</label>
            <md-input v-model="signUpData.lastName"></md-input>
          </md-field>
          <md-field>
            <label>Email</label>
            <md-input v-model="signUpData.email"></md-input>
          </md-field>
          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="signUpData.password" type="password"></md-input>
          </md-field>
          <md-field md-has-password>
            <label>Confirm password</label>
            <md-input
              v-model="signUpData.passwordConfirmation"
              type="password"
            ></md-input>
          </md-field>
          <md-button
            class="sign-in__submit-button md-raised md-primary"
            :disabled="!isSignUpFormCompleted"
            @click="onClickSignUp"
            >Log up</md-button
          >
        </md-tab>
      </md-tabs>
      <div class="sign-in__loading" v-if="isLoading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInPopup',

  components: {},

  data() {
    return {
      signInData: {
        email: '',
        password: ''
      },
      signUpData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      isLoading: false,
      isUserRemembered: false
    };
  },

  computed: {
    isSignInFormCompleted: function () {
      return this.signInData.email.length && this.signInData.password.length;
    },
    isSignUpFormCompleted: function () {
      return (
        this.signUpData.firstName.length &&
        this.signUpData.lastName.length &&
        this.signUpData.email.length &&
        this.signUpData.password.length &&
        this.signUpData.passwordConfirmation.length
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

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isPopupOpened && e.key === 'Escape') {
        this.onClickCloseSignInPopup();
      }
    },

    onClickCloseSignInPopup() {
      this.$emit('onClickCloseSignInPopup');
    },

    onClickSignIn() {
      this.isLoading = true;
      this.$emit('onClickSignIn');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },

    onClickSignUp() {
      this.isLoading = true;
      this.$emit('onClickSignUp');
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-in__popup-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 6;
}

.sign-in__popup {
  position: relative;
}

.sign-in__submit-button {
  margin: 30px 0 0;
  width: 100%;
}

.sign-in__loading {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 7;
}

.sign-in__close-button {
  position: absolute;
  top: 5px;
  right: 0px;
  z-index: 6;
}
</style>

<style lang="scss">
.md-tabs {
  padding-top: 10px;
}

.md-tab {
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
}

.md-tabs-navigation .md-ripple {
  padding: 0 50px;
}

.md-field {
  margin: 4px 0 10px;
}

.md-checkbox {
  margin: 25px 0 5px;
}
</style>
