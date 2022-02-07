<template>
  <div>
    <SignInBtn
      :isSignIn="isSignIn"
      @on-click-show-sign-in-popup="onClickShowSignInPopup"
    />
    <SignInPopup
      :isPopupOpened="isPopupOpened"
      @sign-un="signIn"
      @sign-up="signUp"
      @on-click-close-popup="onClickCloseSignInPopup"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import { SignInBtn, SignInPopup } from '@/components/SignIn/';

Vue.use(VueMaterial);

export default {
  name: 'ComponentsPage',

  components: { SignInBtn, SignInPopup },

  data() {
    return {
      isPopupOpened: false,
      isSignIn: false
    };
  },

  methods: {
    onClickShowSignInPopup: function () {
      this.isPopupOpened = true;
    },

    onClickCloseSignInPopup: function () {
      this.isPopupOpened = false;
    },

    signIn() {
      this.isSignIn = true;
    },

    signUp() {
      this.isSignIn = true;
    }
  }
};
</script>

<style>
@import './ComponentsPage.module.scss';
</style>
