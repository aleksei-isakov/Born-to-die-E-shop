<template>
  <div class="auth-block__wrapper">
    <p class="auth-block__user-name">{{ userName }}</p>
    <v-icon class="auth-block__user-pic">fas fa-user-circle</v-icon>
  </div>
</template>

<script>
export default {
  name: 'AuthBlock',

  props: {
    userName: {
      type: String,
      required: true,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.auth-block__wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  .auth-block__user-pic {
    font-size: $font-size-title;
    color: $button-disabled-color;
  }

  .auth-block__user-name {
    margin: 0;
    letter-spacing: 0.03em;
    font-family: Roboto, sans-serif;
  }
}
</style>
