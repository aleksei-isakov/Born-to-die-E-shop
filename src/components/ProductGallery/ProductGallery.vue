<template>
  <div class="product-gallery__wrapper">
    <Slider :images="images" />
    <AddToCartBlock
      :is-sign-in="false"
      :profile="mockprofile"
      class="add-to-cart"
    />
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider';
import AddToCartBlock from '@/components/Slider/AddToCartBlock/AddToCartBlock';
import mockprofile from '@/components/Slider/AddToCartBlock/mockprofile.json';

export default {
  name: 'ProductGallery',

  components: { AddToCartBlock, Slider },

  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data() {
    return {
      mockprofile: mockprofile
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.product-gallery__wrapper {
  display: flex;
}

@media screen and (max-width: $tablet-size) {
  .product-gallery__wrapper {
    flex-direction: column;
  }
}
</style>
