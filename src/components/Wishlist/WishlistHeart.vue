<template>
  <div>
    <label v-if="isConsumer" class="wishlist-heart" @click="toggleInWishlist">
      <input type="checkbox" :checked="isChecked" />
      <i class="heart fas fa-heart" />
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WishlistHeart',

  props: {
    isProductInWishlist: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isChecked: this.isProductInWishlist
    };
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['isConsumer']),
    ...mapGetters('PdpPageModule', ['productInfo']),
    ...mapGetters('WishlistModule', ['productsInWishlist'])
  },

  watch: {
    productInfo() {
      this.checkHeart();
    },

    productsInWishlist() {
      this.checkHeart();
    }
  },

  methods: {
    ...mapActions('WishlistModule', ['addToWishlist', 'deleteFromWishlist']),

    toggleInWishlist() {
      this.$emit('click');
      this.isChecked = !this.isChecked;

      if (this.isChecked) {
        this.addToWishlist(this.productInfo);
      } else {
        this.deleteFromWishlist(this.productInfo.id);
      }
    },

    checkHeart() {
      const isProductInWishlist = this.productsInWishlist.find(
        (el) => el.id === this.productInfo.id
      );

      if (isProductInWishlist) {
        this.isChecked = true;
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
