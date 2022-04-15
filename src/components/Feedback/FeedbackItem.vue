<template>
  <div class="feedback-item">
    <div class="feedback-item__head-info">
      <h3>
        <span class="feedback-item__name"> {{ reviewerName }} </span>
        <span class="feedback-item__date"> {{ getStyledDate }} </span>
      </h3>
      <div class="feedback-item__buttons">
        <base-button
          v-if="isEditButtonVisible"
          class="feedback-item__edit-btn"
          @click="onClickEditFeedback"
        >
          <i class="fas fa-edit" />
        </base-button>
      </div>
    </div>
    <rating-icon class="feedback-item__rating" :rating="rating" />
    <div class="feedback-item__comment">
      {{ comment }}
    </div>
  </div>
</template>

<script>
import RatingIcon from '@/components/RatingIcon/RatingIcon.vue';
import { format } from 'date-fns';
import { BaseButton } from '@/base_components';

export default {
  name: 'FeedbackItem',

  components: { RatingIcon, BaseButton },

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
    },

    reviewerId: {
      type: String,
      default: ''
    },

    feedbackId: {
      type: String,
      default: ''
    },

    isEditButtonVisible: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getFormatedDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    },

    getStyledDate() {
      return `(${this.getFormatedDate})`;
    }
  },

  methods: {
    onClickEditFeedback() {
      this.$emit('edit', this.feedbackId);
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

  &__head-info {
    display: flex;
    width: 100%;
    margin-bottom: 4px;
    align-items: center;
    justify-content: space-between;
  }
  &__rating {
    margin-bottom: 7px;
  }

  &__comment {
    text-align: left;
  }

  &__buttons {
    display: flex;
    gap: 10px;
  }

  &__edit-btn {
    font-size: 23px;
    color: $primary;
  }
}
</style>
