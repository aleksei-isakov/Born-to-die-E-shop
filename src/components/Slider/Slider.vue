<template>
  <div class="pdp__slider">
    <mini-gallery
      :slides="images"
      :slide-number="slideNumber"
      @onSelectSlide="onSelectSlide"
    />
    <photo-slider
      :slide-number="slideNumber"
      :slides="images"
      :direction="direction"
      @onSelectSlide="onSelectSlide"
    />
  </div>
</template>

<script>
import PhotoSlider from '@/components/Slider/PhotoSlider/PhotoSlider';
import MiniGallery from '@/components/Slider/MiniGallery/MiniGallery';

export default {
  name: 'Slider',

  components: { PhotoSlider, MiniGallery },

  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data: () => ({
    direction: 'right',
    slideNumber: 0
  }),

  methods: {
    onSelectSlide(i) {
      this.direction = i > this.slideNumber ? 'right' : 'left';
      this.slideNumber = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.pdp__slider {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  width: 100%;
}

@media screen and (max-width: $tablet-size) {
  .pdp__slider {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
