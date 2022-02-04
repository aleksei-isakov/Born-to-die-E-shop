<template>
  <div class="sign-in__button">
    <BaseButtun v-if="isSignIn" v-on:click="onClickShowPopup" />
    <BaseButtonRouter v-else :path="profilePath"> {{ profileBtnText }} </BaseButtonRouter>
  </div>
</template>

<script>
export default {
  name: 'SignInBtn',

  components: {
    BaseButtun,
    BaseButtonRouter
  },

  props: {
    isSignIn: {
      type: Boolean,
      required: true,
      default: false,
    }
  },

  methods: {
    onClickShowPopup: function () {
      this.$emit('onClickShowPopup');
    }
  },

  data() {
    return {
      profilePath: '/profile',
      profileBtnText: 'Profile',
    }
  }
}
</script>

<style scoped>
.sign-in__button {
  padding: 5px;
}
</style>
