<template>
  <div class="mini-gallery">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      :class="{ activeImg: slideNumber === i }"
    >
      <img :src="slide.img" @click="onClickImageSelectSlide(i)" />
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.activeImg {
  border: 5px solid #00a8e1;
}

.mini-gallery {
  flex-direction: column;
  float: left;
  max-width: 15%;
  margin: 7px 10px 0 2px;
}

@media screen and (max-width: $tablet-size) {
  .mini-gallery {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    object-fit: cover;
    max-width: 100%;
  }
}
</style>
