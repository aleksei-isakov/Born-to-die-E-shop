<template>
  <div class="add-to-card__wrapper">
    <rating-icon :rating="rating" />

    <base-text-filled-button
      class="add-to-card__button"
      @click="onClickAddToCart"
    >
      + ADD TO CART
    </base-text-filled-button>

    <auth-block v-if="currentUserInfo" :user-name="getUserName" />
  </div>
</template>

<script>
import { BaseTextFilledButton } from '@/base_components/';
import AuthBlock from './AuthBlock.vue';
import RatingIcon from '@/components/RatingIcon/RatingIcon';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddToCartBlock',

  components: {
    BaseTextFilledButton,
    AuthBlock,
    RatingIcon
  },

  props: {
    rating: {
      type: Number,
      default: 0,
      required: true
    }
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['currentUserInfo']),
    ...mapGetters('PdpPageModule', ['productInfo']),

    getUserName() {
      return this.currentUserInfo.user.firstName || '';
    }
  },

  methods: {
    ...mapActions('ShoppingCartModule', ['addToCart']),

    onClickAddToCart() {
      this.addToCart(this.productInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.add-to-card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;
  border-left: solid 1px $light-border-color;
}

.add-to-card__button {
  white-space: nowrap;
}
</style>
