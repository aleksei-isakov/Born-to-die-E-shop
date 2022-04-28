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
      return this.productsInWishlist.some(({ id }) => id === this.product.id);
    }
  },

  methods: {
    ...mapActions('WishlistModule', ['addToWishlist', 'deleteFromWishlist']),

    toggleInWishlist() {
      if (this.isProductInWishlist) {
        this.deleteFromWishlist(this.productInfo.id);
      }

      return this.addToWishlist(this.product);
    }
  }
};
</script>
