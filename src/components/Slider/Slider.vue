<template>
  <div class="slider">
    <mini-gallery
      :slides="slides"
      :slideNumber="slideNumber"
      @onSelectSlide="onSelectSlide"
    />
    <photo-slider
      :slideNumber="slideNumber"
      :slides="slides"
      :direction="direction"
      @onSelectSlide="onSelectSlide"
    />
  </div>
</template>

<script>
import PhotoSlider from '@/components/Slider/PhotoSlider/PhotoSlider';
import MiniGallery from '@/components/Slider/MiniGallery/MiniGallery';
import slides from './mockedSlides.json';

export default {
  name: 'Slider',

  components: { PhotoSlider, MiniGallery },

  data: () => ({
    direction: 'right',
    slides: slides,
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

<style scoped>
.slider {
  display: flex;
  justify-content: center;
  border: 2px solid rgb(228, 228, 228);
}

@media screen and (max-width: 767px) {
  .slider {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
