<template>
  <div class="auth-block__wrapper">
    <div class="auth-block__user">
      <p class="auth-block__user-name">{{ getName }}</p>
      <img :src="getImage" class="auth-block__user-pic" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthBlock',

  components: {},

  props: {
    profile: {
      type: Object,
      required: true,
      default: () => {}
    },

    isSignIn: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    getName() {
      return this.isSignIn
        ? this.profile?.user?.text
        : this.profile?.defaultUser?.text;
    },

    getImage() {
      return this.isSignIn
        ? this.profile?.user?.img
        : this.profile?.defaultUser?.img;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.auth-block__user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-block__user-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.auth-block__user-name {
  margin: 0;
}

.auth-block__wrapper .auth-block__login {
  color: $font-color-title;
  &:hover {
    color: $font-color-subtitle;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
