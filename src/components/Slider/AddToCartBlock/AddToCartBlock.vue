<template>
  <div class="add-to-card__wrapper">
    <base-text-filled-button class="add-to-card__button">
      + ADD TO CART
    </base-text-filled-button>
    <auth-block
      v-if="currentUserInfo"
      :user-name="currentUserInfo.user.firstName"
    />
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import AuthBlock from './AuthBlock.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AddToCartBlock',

  components: {
    BaseTextFilledButton,
    AuthBlock
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['currentUserInfo'])
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
