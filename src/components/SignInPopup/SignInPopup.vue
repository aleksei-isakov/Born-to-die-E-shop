<template>
  <div
    v-if="isPopupOpened"
    class="sign-in__popup-shadow"
    @click.self="onClickCloseSignInPopup"
  >
    <div class="sign-in__popup">
      <md-tabs
        class="md-content md-elevation-3 md-theme-default"
        md-alignment="centered"
      >
        <md-tab md-label="Sign In">
          <md-field>
            <label>E-mail</label>
            <md-input v-model="login.email" autofocus></md-input>
          </md-field>
          <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="login.password" type="password"></md-input>
          </md-field>

          <md-checkbox v-model="isUserRemembered" class="md-primary"
            >Remember me</md-checkbox
          >
          <md-button
            class="sign-in__submit-button md-raised md-primary"
            :disabled="!isFormCompleted"
            @click="onClickSignIn"
            >Log in</md-button
          >
        </md-tab>
        <md-tab md-label="Sign Up"></md-tab>
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
      login: {
        email: '',
        password: ''
      },
      isLoading: false,
      isUserRemembered: false
    };
  },

  computed: {
    isFormCompleted: function () {
      return this.login.email.length && this.login.password.length;
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
  margin: 0;
  width: 100%;
}

.md-tab {
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
}

.md-field {
  margin: 4px 0 10px;
}

.md-checkbox {
  margin: 25px 0;
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
</style>
