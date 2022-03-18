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
    getFormatDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    },

    getStyledDate() {
      return `(${this.getFormatDate})`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.feedback-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  box-shadow: $shadow;
  width: 100%;
  align-self: center;
  padding: 10px 20px;

  &__head-info,
  &__rating {
    margin-bottom: 7px;
  }

  &__comment {
    text-align: left;
  }
}
</style>
