<template>
  <div>
    <label v-if="isConsumer" class="wishlist-heart" @click="toggleInWishlist">
      <input type="checkbox" />
      <i class="heart fas fa-heart" />
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WishlistHeart',

  data() {
    return {
      isChecked: false
    };
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['isConsumer']),
    ...mapGetters('PdpPageModule', ['productInfo']),
    ...mapGetters('WishlistModule', ['productsInWishlist'])
  },

  methods: {
    ...mapActions('WishlistModule', ['addToWishlist', 'deleteFromWishlist']),

    toggleInWishlist() {
      this.isChecked = !this.isChecked;

      if (this.isChecked) {
        this.addToWishlist(this.productInfo);
      } else {
        this.deleteFromWishlist(this.productInfo.id);
      }
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
