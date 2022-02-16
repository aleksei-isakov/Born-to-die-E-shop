<template>
  <div class="mini-gallery">
    <div v-for="(slide, i) in slides" :key="i" :class="itemClass(i)">
      <img :src="slide" @click="onClickImageSelectSlide(i)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniGallery',

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
    }
  },

  methods: {
    onClickImageSelectSlide(id) {
      this.$emit('onSelectSlide', id);
    },

    itemClass(i) {
      return `mini-gallery__item${this.slideNumber === i ? '_active' : ''}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.mini-gallery__item {
  display: flex;

  &_active {
    border: 5px solid #00a8e1;
  }
}

.mini-gallery {
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
  gap: 10px;
}

@media screen and (max-width: $tablet-size) {
  .mini-gallery {
    flex-direction: row;
    max-width: 100%;
  }

  .mini-gallery__item > img {
    object-fit: cover;
  }
}
</style>
