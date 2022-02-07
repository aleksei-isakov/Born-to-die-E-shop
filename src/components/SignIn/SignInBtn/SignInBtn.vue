<template>
  <div class="sign-in__wrapper">
    <BaseButtonRouter
      v-if="isSignIn"
      :path="'/profile'"
      class="sign-in__button"
    >
      Profile
    </BaseButtonRouter>
    <BaseButton v-else @click="onClickShowSignInPopup" class="sign-in__button">
      Sign in
    </BaseButton>
  </div>
</template>

<script>
import { BaseButton, BaseButtonRouter } from '@/base_components';
export default {
  name: 'SignInBtn',

  components: {
    BaseButton,
    BaseButtonRouter
  },

  props: {
    isSignIn: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  methods: {
    onClickShowSignInPopup: function () {
      this.$emit('on-click-show-sign-in-popup');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.sign-in__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in__button {
  display: block;
  padding: 10px 20px;
  background-color: $primary;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;
  color: #fff !important;
  text-transform: uppercase;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.01em;
  font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
  &:hover {
    text-decoration: none;
  }
}
</style>
