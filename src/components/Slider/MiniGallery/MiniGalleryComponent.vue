<template>
  <div class="mini-gallery">
    <div
      :class="{ activeImg: slideNumber === i }"
      v-for="(slide, i) in slides"
      :key="i"
    >
      <img :src="slide.img" @click="onClickImage(i)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniGalleryComponent',

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
    onClickImage(id) {
      this.$emit('onSelectSlide', id);
    }
  }
};
</script>

<style scoped>
.activeImg {
  border: 5px solid #00a8e1;
}
.mini-gallery {
  flex-direction: column;
  margin-top: 1%;
  margin-right: 1%;
  margin-bottom: 10%;
  float: left;
  max-width: 10%;
}

@media screen and (max-width: 767px) {
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
