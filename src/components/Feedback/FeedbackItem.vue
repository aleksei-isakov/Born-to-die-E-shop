<template>
  <div class="feedback-item">
    <h3 class="feedback-item__head-info">
      <span class="feedback-item__name"> {{ reviewerName }} </span>
      <span class="feedback-item__date"> {{ getStyledDate }} </span>
    </h3>
    <rating-icon class="feedback-item__rating" :rating="rating" />
    <div class="feedback-item__comment">
      {{ comment }}
    </div>
  </div>
</template>

<script>
import RatingIcon from '@/components/RatingIcon/RatingIcon.vue';
import { format } from 'date-fns';

export default {
  name: 'FeedbackItem',

  components: { RatingIcon },

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

  computed: {
    getFormatedDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    },

    getStyledDate() {
      return `(${this.getFormatedDate})`;
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
}
</style>
