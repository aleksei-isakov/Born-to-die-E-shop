<template>
  <div>
    <div v-if="isForm" id="star-rating--form">
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
        <label aria-label="1 star" class="rating__label" for="rating-1"
          ><i class="rating__icon rating__icon--colored fa fa-star"></i
        ></label>
        <input
          id="rating-1"
          class="rating__input"
          name="rating3"
          value="1"
          type="radio"
        />
        <label aria-label="2 stars" class="rating__label" for="rating-2"
          ><i class="rating__icon rating__icon--colored fa fa-star"></i
        ></label>
        <input
          id="rating-2"
          class="rating__input"
          name="rating3"
          value="2"
          type="radio"
        />
        <label aria-label="3 stars" class="rating__label" for="rating-3"
          ><i class="rating__icon rating__icon--colored fa fa-star"></i
        ></label>
        <input
          id="rating-3"
          class="rating__input"
          name="rating3"
          value="3"
          type="radio"
        />
        <label aria-label="4 stars" class="rating__label" for="rating-4"
          ><i class="rating__icon rating__icon--colored fa fa-star"></i
        ></label>
        <input
          id="rating-4"
          class="rating__input"
          name="rating3"
          value="4"
          type="radio"
        />
        <label aria-label="5 stars" class="rating__label" for="rating-5"
          ><i class="rating__icon rating__icon--colored fa fa-star"></i
        ></label>
        <input
          id="rating-5"
          class="rating__input"
          name="rating3"
          value="5"
          type="radio"
        />
      </div>
    </div>
    <div v-else class="star-rating">
      <BaseCustomIcon
        v-for="index in max"
        :key="index"
        class="star"
        :icon="emptyStarIcon"
        :width="emptyStarWidth"
      />
      <div class="star-rating__colored" :style="`width: ${getRatingWidth}%;`">
        <BaseCustomIcon
          v-for="index in max"
          :key="index"
          class="star"
          :icon="fullStarIcon"
          :width="fullStarWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseCustomIcon } from '@/base_components/';

function numRound(num) {
  return Math.round(num * 2) / 2;
}

export default {
  name: 'RatingIcon',

  components: {
    BaseCustomIcon
  },

  props: {
    isForm: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 5
    },
    rating: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    fullStarIcon: 'full_star',
    fullStarWidth: '25px',
    emptyStarIcon: 'empty_star',
    emptyStarWidth: '25px'
  }),

  computed: {
    getRatingWidth() {
      return (numRound(this.rating) / this.max) * 100;
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
    position: absolute !important;
    left: -9999px !important;
  }

  .rating__input--none {
    display: none;
  }

  .rating__label {
    cursor: pointer;
    padding: 0 0.1em;
    font-size: 25px;
  }

  .rating__icon--colored {
    color: #ffa500;
  }

  .rating__input:checked ~ .rating__label .rating__icon--colored {
    color: #ddd;
  }

  .rating-group:hover .rating__label .rating__icon--colored {
    color: #ffa500;
  }

  .rating__input:hover ~ .rating__label .rating__icon--colored {
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
