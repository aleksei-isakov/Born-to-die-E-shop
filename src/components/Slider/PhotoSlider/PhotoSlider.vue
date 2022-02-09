<template>
  <div>
    <div class="photo-slider">
      <photo-slide-item
        :direction="direction"
        v-for="(slide, i) in slides"
        :key="i"
      >
        <img v-if="slideNumber === i" :src="slide.img" alt="No image" />
      </photo-slide-item>
      <div class="photo-slider__pagination">
        <button
          v-for="n in slidesCount"
          :key="n"
          @click="onClickGoTo(n - 1)"
          :class="{ active: slideNumber === n - 1 }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSlideItem from '@/components/Slider/PhotoSlider/PhotoSlideItem';

export default {
  components: { PhotoSlideItem },

  name: 'PhotoSlider',

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

<style scoped>
.photo-slider {
  position: relative;
  overflow: hidden;
}

.photo-slider__pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

.photo-slider__pagination button {
  width: 15px;
  height: 15px;
  border: none;
  background: rgba(230, 230, 230, 0.63);
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}

.photo-slider__pagination button.active {
  opacity: 1;
  background: rgb(44, 93, 243);
}

@media screen and (max-width: 767px) {
  .photo-slider__pagination {
    display: none;
  }
}
</style>
