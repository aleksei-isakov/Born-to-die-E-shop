<template>
  <div class="slider">
    <mini-gallery-component
      :slides="slides"
      :slideNumber="slideNumber"
      @onSelectSlide="onSelectSlide"
    />
    <photo-slider-component
      :slideNumber="slideNumber"
      :slides="slides"
      :direction="direction"
      @onSelectSlide="onSelectSlide"
    />
  </div>
</template>

<script>
import PhotoSliderComponent from './PhotoSlider/PhotoSliderComponent';
import MiniGalleryComponent from '@/components/Slider/MiniGallery/MiniGalleryComponent';

export default {
  name: 'Slider',

  components: { PhotoSliderComponent, MiniGalleryComponent },

  data: () => ({
    direction: 'right',
    slides: [
      {
        id: 0,
        img: 'https://picsum.photos/id/1032/900/600'
      },
      {
        id: 1,
        img: 'https://picsum.photos/id/1037/900/600'
      },
      {
        id: 2,
        img: 'https://picsum.photos/id/1035/900/600'
      },
      {
        id: 3,
        img: 'https://picsum.photos/id/1036/900/600'
      }
    ],
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
