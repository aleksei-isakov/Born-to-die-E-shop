<template>
  <div class="feedback-item">
    <h3 class="feedback-item__head-info">
      <span class="feedback-item__name"> {{ reviewerName }} </span>
      <span class="feedback-item__date"> {{ getStyledDate }} </span>
    </h3>
    <rating-icon class="feedback-item__rating" :rating="rating" />
    <div class="feedback-item__comment">
      {{ displayedText }}
      <base-text-button
        class="feedback-item__button"
        @click="showFullText = !showFullText"
      >
        Read {{ readMoreText }}
      </base-text-button>
    </div>
  </div>
</template>

<script>
import RatingIcon from '@/components/RatingIcon/RatingIcon.vue';
import { format } from 'date-fns';
import { BaseTextButton } from '@/base_components/';

export default {
  name: 'FeedbackItem',

  components: { RatingIcon, BaseTextButton },

  props: {
    reviewerName: {
      type: String,
      default: ''
    },

    date: {
      type: String,
      default: ''
    },

    rating: {
      type: Number,
      default: 0
    },

    comment: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      showFullText: false
    };
  },

  computed: {
    getFormatedDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    },

    getStyledDate() {
      return `(${this.getFormatedDate})`;
    },

    displayedText() {
      if (!this.showFullText) {
        return this.comment.slice(0, 500);
      } else {
        return this.comment;
      }
    },

    readMoreText() {
      return this.showFullText ? 'less' : 'more';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.feedback-item {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  align-items: flex-start;
  align-self: center;
  box-shadow: $shadow;

  &__head-info,
  &__rating {
    margin-bottom: 7px;
  }

  &__comment {
    text-align: left;
  }

  &__button {
    color: $primary;
    padding: 0 7px;
  }
}
</style>
