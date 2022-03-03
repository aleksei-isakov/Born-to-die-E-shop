<template>
  <div class="sign-in__wrapper">
    <BaseButtonRouter
      v-if="currentUserInfo"
      path="/profile"
      class="sign-in__profile-button"
    >
      Profile
    </BaseButtonRouter>
    <BaseTextBorderButton
      v-else
      color="custom-white"
      @click="onClickShowSignInPopup"
    >
      Sign in
    </BaseTextBorderButton>
  </div>
</template>

<script>
import { BaseButtonRouter, BaseTextBorderButton } from '@/base_components/';
import { mapGetters } from 'vuex';

export default {
  name: 'SignInBtn',

  components: {
    BaseTextBorderButton,
    BaseButtonRouter
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['currentUserInfo'])
  },

  methods: {
    onClickShowSignInPopup() {
      this.$emit('on-click-show-sign-in-popup');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.sign-in__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in__wrapper > .sign-in__profile-button {
  height: fit-content;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid $white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.03em;
  color: $white;
  font-family: Roboto, sans-serif;
  transition: $transition;
  &:hover {
    color: $white-hover;
    border-color: $white-hover;
    text-decoration: none;
  }
}
</style>
