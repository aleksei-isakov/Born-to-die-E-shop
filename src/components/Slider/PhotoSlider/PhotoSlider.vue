<template>
  <div>
    <div class="photo-slider">
      <photo-slide-item
        v-for="(slide, i) in slides"
        :key="i"
        :direction="direction"
      >
        <img v-if="slideNumber === i" :src="slide" alt="No image" />
      </photo-slide-item>
    </div>
    <div class="photo-slider__pagination">
      <button
        v-for="n in slidesCount"
        :key="n"
        :class="{ active: slideNumber === n - 1 }"
        @click="onClickGoTo(n - 1)"
      ></button>
    </div>
  </div>
</template>

<script>
import PhotoSlideItem from '@/components/Slider/PhotoSlider/PhotoSlideItem';

export default {
  name: 'PhotoSlider',
  components: { PhotoSlideItem },

  props: {
    slideNumber: {
      type: Number,
      default: 0,
      required: true
    },

    slides: {
      type: Array,
      default: () => [],
      required: true
    },

    direction: {
      type: String,
      default: 'right',
      required: true
    }
  },

  computed: {
    slidesCount() {
      return this.slides.length;
    }
  },

  methods: {
    onClickGoTo(index) {
      this.$emit('onSelectSlide', index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.photo-slider {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.photo-slider__pagination button {
  width: 15px;
  height: 15px;
  border: none;
  background: $button-disabled-color;
  margin: 0.4em;
  border-radius: 50%;
  cursor: pointer;
}

.photo-slider__pagination button.active {
  opacity: 1;
  background: rgb(44, 93, 243);
}

@media screen and (max-width: $tablet-size) {
  .photo-slider__pagination {
    display: none;
  }
}
</style>
