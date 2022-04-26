<template>
  <wishlist-heart-icon
    :is-checked="isProductInWishlist"
    @click="toggleInWishlist"
  />
</template>

<script>
import WishlistHeartIcon from '@/components/Wishlist/WishlistHeartIcon.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WishlistHeart',

  components: {
    WishlistHeartIcon
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo']),
    ...mapGetters('WishlistModule', ['productsInWishlist']),

    isProductInWishlist() {
      return this.productsInWishlist.find((el) => el.id === this.productInfo.id)
        ? true
        : false;
    }
  },

  methods: {
    ...mapActions('WishlistModule', ['addToWishlist', 'deleteFromWishlist']),

    toggleInWishlist() {
      if (this.isProductInWishlist) {
        this.deleteFromWishlist(this.productInfo.id);
      } else {
        this.addToWishlist(this.productInfo);
      }
    }
  }
};
</script>
