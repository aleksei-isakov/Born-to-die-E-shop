<template>
  <div class="wrapper">
    <Slider class="slider" />
    <AddToCart
      :is-user-logged-in="true"
      :mockprofile="mockprofile"
      class="add-to-cart"
    />
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider';
import AddToCart from '@/components/Slider/AddToCartBlock/AddToCartBlock';
import mockprofile from '@/components/Slider/AddToCartBlock/mockprofile.json';

export default {
  name: 'ProductGallery',

  components: { AddToCart, Slider },

  data() {
    return {
      mockprofile: mockprofile
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  padding: 20px 40px;
}

@media screen and (max-width: 767px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
