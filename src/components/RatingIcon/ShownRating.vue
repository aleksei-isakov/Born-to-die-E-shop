<template>
  <div class="star-rating">
    <i v-for="n in starsCount" :key="n" class="star star--empty fa fa-star" />
    <div class="star-rating__colored" :style="getStyledRatingWidth">
      <i
        v-for="n in starsCount"
        :key="n"
        class="star star--colored fa fa-star"
      />
    </div>
  </div>
</template>

<script>
const STARS_COUNT = 5;

export default {
  name: 'ShownRating',

  props: {
    rating: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      starsCount: STARS_COUNT
    };
  },

  computed: {
    getRatingWidth() {
      return (this.roundRating(this.rating) / this.starsCount) * 100;
    },

    getStyledRatingWidth() {
      return `width: ${this.getRatingWidth}%;`;
    }
  },

  methods: {
    roundRating(rating) {
      return Math.round(rating * 2) / 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.star-rating {
  display: inline-flex;
  position: relative;

  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;
  font-size: 20px;
  margin: 0 2px;
  flex-shrink: 0;
  color: #ffa500;

  &--colored {
    color: #ffa500;
  }

  &--empty {
    color: #ddd;
  }
}
</style>
