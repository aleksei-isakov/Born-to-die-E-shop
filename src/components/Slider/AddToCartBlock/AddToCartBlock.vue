<template>
  <div class="add-to-card__wrapper">
    <BaseTextFilledButton class="add-to-card__button">
      + ADD TO CART
    </BaseTextFilledButton>

    <div v-if="isUserLoggedIn" class="add-to-card__user">
      <p class="add-to-card__user-name">{{ mockprofile.loggedIn }}</p>
      <img :src="mockprofile.img" class="add-to-card__user-pic" />
    </div>

    <div v-else class="add-to-card__user">
      <a class="add-to-card__login"> {{ mockprofile.signIn }} </a>
      <img :src="mockprofile.defaultAvatar" class="add-to-card__user-pic" />
    </div>
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';

export default {
  name: 'AddToCardBlock',

  components: { BaseTextFilledButton },

  props: {
    mockprofile: {
      type: Object,
      required: true
    },

    isUserLoggedIn: {
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

.add-to-card__user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.add-to-card__user-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.add-to-card__user-name {
  margin: 0;
}

.add-to-card__wrapper .add-to-card__login {
  color: $font-color-title;
  &:hover {
    color: $font-color-subtitle;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
