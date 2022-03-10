<template>
  <div class="product-gallery__wrapper">
    <slider :images="images" />
    <add-to-cart-block class="add-to-cart" />
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider';
import AddToCartBlock from '@/components/Slider/AddToCartBlock/AddToCartBlock';

export default {
  name: 'ProductGallery',

  components: { AddToCartBlock, Slider },

  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
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
