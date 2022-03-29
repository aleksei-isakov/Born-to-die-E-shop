<template>
  <div class="rating-group">
    <div v-for="starIndex in starsCount" :key="starIndex" class="stars-wrapper">
      <label
        :aria-label="`${starIndex} stars`"
        class="rating__label"
        :for="`rating-${starIndex}`"
        ><i
          :class="[
            'rating__icon fa fa-star',
            { 'rating__icon--colored': starIndex <= rating }
          ]"
        ></i
      ></label>
      <input
        :id="`rating-${starIndex}`"
        class="rating__input"
        :value="starIndex"
        type="radio"
        name="rating"
        @input="onInputChangeRating(starIndex)"
      />
    </div>
  </div>
</template>

<script>
const STARS_COUNT = 5;

export default {
  name: 'EditableRating',

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

  methods: {
    onInputChangeRating(starIndex) {
      this.$emit('change-rating', starIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.rating-group {
  display: inline-flex;
}

.stars-wrapper {
  padding: 0 1px;
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
</style>
