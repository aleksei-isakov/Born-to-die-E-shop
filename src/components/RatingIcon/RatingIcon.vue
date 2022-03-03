<template>
  <div>
    <div v-if="isEditable" id="star-rating--form">
      <div class="rating-group">
        <input
          id="rating-none"
          disabled
          checked
          class="rating__input rating__input--none"
          name="rating3"
          value="0"
          type="radio"
        />
        <div v-for="n of starsCount" :key="n" class="stars-wrapper">
          <label
            :aria-label="n + ' stars'"
            class="rating__label"
            :for="'rating-' + n"
            ><i class="rating__icon rating__icon--colored fa fa-star"></i
          ></label>
          <input
            :id="'rating-' + n"
            class="rating__input"
            :value="n"
            type="radio"
            :name="'rating' + n"
          />
        </div>
      </div>
    </div>
    <div v-else class="star-rating">
      <BaseCustomIcon
        v-for="index in starsCount"
        :key="index"
        class="star"
        :icon="emptyStarIcon"
        :width="starWidth"
      />
      <div class="star-rating__colored" :style="`width: ${getRatingWidth}%;`">
        <BaseCustomIcon
          v-for="index in starsCount"
          :key="index"
          class="star"
          :icon="fullStarIcon"
          :width="starWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseCustomIcon } from '@/base_components/';

const STARS_COUNT = 5;

export default {
  name: 'RatingIcon',

  components: {
    BaseCustomIcon
  },

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
    fullStarIcon: 'full_star',
    emptyStarIcon: 'empty_star',
    starWidth: '25px'
  }),

  computed: {
    getRatingWidth() {
      return (this.roundRaiting(this.rating) / this.starsCount) * 100;
    }
  },

  methods: {
    roundRaiting(raiting) {
      return Math.round(raiting * 2) / 2;
    }
  }
};
</script>

<style lang="scss" scoped>
#star-rating--form {
  .rating-group {
    display: inline-flex;
  }

  .rating__icon {
    pointer-events: none;
  }

  .rating__input {
    position: absolute;
    left: -9999px;

    &--none {
      display: none;
    }
  }

  .rating__label {
    cursor: pointer;
    padding: 0 0.1em;
    font-size: 25px;
  }

  .rating__icon--colored {
    color: #ffa500;
  }

  .rating__input:checked
    ~ .stars-wrapper
    .rating__label
    .rating__icon--colored {
    color: #ddd;
  }

  .rating-group:hover .stars-wrapper .rating__label .rating__icon--colored {
    color: #ffa500;
  }

  .rating__input:hover ~ .stars-wrapper .rating__label .rating__icon--colored {
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
  width: 25px;
  height: 25px;
  flex-shrink: 0;
}
</style>
