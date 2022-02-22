<template>
  <div class="add-to-card__wrapper">
    <BaseTextFilledButton class="add-to-card__button">
      + ADD TO CART
    </BaseTextFilledButton>
    <AuthBlock :profile="profile" :is-sign-in="isSignIn" />
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import AuthBlock from './AuthBlock.vue';

export default {
  name: 'AddToCartBlock',

  components: {
    BaseTextFilledButton,
    AuthBlock
  },

  props: {
    profile: {
      type: Object,
      required: true
    },

    isSignIn: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.add-to-card__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border-left: solid 1px $light-border-color;
}

.add-to-card__button {
  white-space: nowrap;
}
</style>
