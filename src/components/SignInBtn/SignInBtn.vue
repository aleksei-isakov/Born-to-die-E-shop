<template>
  <div class="wrapper">
    <!-- <BaseButtun v-if="isSignIn" class="md-raised sign-in__button" v-on:click="onClickShowSignInPopup"> {{ signInBtnText }} </BaseButtun> -->
    <!-- <BaseButtonRouter v-else :path="profilePath" class="md-raised sign-in__button"> {{ profileBtnText }} </BaseButtonRouter> -->
    <md-button
      v-on:click="onClickShowSignInPopup"
      v-if="!isSignIn"
      class="md-raised sign-in__button"
    >
      {{ signInBtnText }}
    </md-button>
    <md-button v-else class="md-raised sign-in__button">
      {{ profileBtnText }}
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'SignInBtn',

  components: {
    // BaseButtun,
    // BaseButtonRouter
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
      this.$emit('onClickShowSignInPopup');
    }
  },

  data() {
    return {
      profilePath: '/profile',
      profileBtnText: 'Profile',
      signInBtnText: 'Sign in'
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: inline-block;
}

.sign-in__button {
  padding: 5px;
  background: none;
  border: 2px solid #fff;
}
</style>
