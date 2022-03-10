<template>
  <div class="rating-group">
    <div v-for="n in starsCount" :key="n" class="stars-wrapper">
      <label
        :aria-label="`${n} stars`"
        class="rating__label"
        :for="`rating-${n}`"
        ><i
          :class="[
            'rating__icon fa fa-star',
            { 'rating__icon--colored': n <= selectedRating }
          ]"
        ></i
      ></label>
      <input
        :id="`rating-${n}`"
        class="rating__input"
        :value="n"
        type="radio"
        name="rating"
        @input="changeSelectedRating(n)"
      />
    </div>
  </div>
</template>

<script>
const STARS_COUNT = 5;

export default {
  name: 'EditableRating',

  data() {
    return {
      starsCount: STARS_COUNT,
      selectedRating: 0
    };
  },

  methods: {
    changeSelectedRating(n) {
      this.selectedRating = n;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
