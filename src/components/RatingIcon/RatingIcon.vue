<template>
  <div>
    <div v-if="isEditable" id="star-rating--form">
      <div class="rating-group">
        <div v-for="n in starsCount" :key="n" class="stars-wrapper">
          <label
            :aria-label="n + ' stars'"
            class="rating__label"
            :for="'rating-' + n"
            ><i
              :class="[
                'rating__icon fa fa-star',
                { 'rating__icon--colored': n <= selectedRating }
              ]"
            ></i
          ></label>
          <input
            :id="'rating-' + n"
            class="rating__input"
            :value="n"
            type="radio"
            name="rating"
            @input="changeSelectedRating(n)"
          />
        </div>
      </div>
    </div>
    <div v-else class="star-rating">
      <i v-for="n in starsCount" :key="n" class="star star--empty fa fa-star" />
      <div class="star-rating__colored" :style="`width: ${getRatingWidth}%;`">
        <i
          v-for="n in starsCount"
          :key="n"
          class="star star--colored fa fa-star"
        />
      </div>
    </div>
  </div>
</template>

<script>
const STARS_COUNT = 5;

export default {
  name: 'RatingIcon',

  props: {
    isEditable: {
      type: Boolean,
      default: false
    },

    rating: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    starsCount: STARS_COUNT,
    selectedRating: 0
  }),

  computed: {
    getRatingWidth() {
      return (this.roundRating(this.rating) / this.starsCount) * 100;
    }
  },

  methods: {
    roundRating(rating) {
      return Math.round(rating * 2) / 2;
    },

    changeSelectedRating(n) {
      this.selectedRating = n;
    }
  }
};
</script>

<style lang="scss" scoped>
#star-rating--form {
  .rating-group {
    display: inline-flex;
  }

  .stars-wrapper {
    margin: 0 5px 0 0;

    &:last-child {
      margin: 0;
    }
  }

  .rating__icon {
    pointer-events: none;
    color: #ddd;
  }

  .rating__input {
    position: absolute;
    left: -9999px;
    color: #ddd;

    &--none {
      display: none;
    }
  }

  .rating__label {
    cursor: pointer;
    font-size: 25px;
  }

  .rating__icon--colored {
    color: #ffa500;
  }

  .stars-wrapper .rating__input:checked ~ .stars-wrapper {
    color: #ddd;
  }

  .rating-group:hover .stars-wrapper .rating__icon {
    color: #ffa500;
  }

  .stars-wrapper:hover ~ .stars-wrapper .rating__icon {
    color: #ddd;
  }
}

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
  margin: 0 3px 0 0;
  flex-shrink: 0;
  color: #ffa500;

  &--colored {
    color: #ffa500;
  }

  &--empty {
    color: #ddd;
  }

  &:last-child {
    margin: 0;
  }
}
</style>
