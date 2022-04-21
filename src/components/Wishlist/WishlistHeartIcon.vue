<template>
  <div v-if="isConsumer">
    <label class="wishlist-heart" @click="toggleInWishlist">
      <input type="checkbox" :checked="isChecked" />
      <i class="heart fas fa-heart" />
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WishlistHeartIcon',

  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['isConsumer'])
  },

  methods: {
    toggleInWishlist() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.wishlist-heart {
  position: relative;
}

.wishlist-heart input[type='checkbox'] {
  position: absolute;
  width: 100%;
  height: 25px;
  opacity: 0;
  cursor: pointer;
}

.heart {
  font-size: 25px;
  color: #ddd;
  text-shadow: 0px 0px 3px #626262;
}

.wishlist-heart input[type='checkbox']:checked ~ .heart,
.wishlist-heart input[type='checkbox']:hover ~ .heart {
  color: #f30808;
}
</style>
