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
        <base-button
          v-if="isDeleteButtonVisible"
          class="feedback-item__delete-btn"
          @click="onClickDeleteFeedback"
        >
          <i class="fas fa-eraser" />
        </base-button>
      </div>
    </div>
    <rating-icon class="feedback-item__rating" :rating="rating" />
    <div class="feedback-item__comment">
      {{ displayedText }}
      <base-text-button
        v-if="isButtonDisplayed"
        class="feedback-item__button"
        @click="toggleTextMode"
      >
        Read {{ readMoreText }}
      </base-text-button>
    </div>
  </div>
</template>

<script>
import RatingIcon from '@/components/RatingIcon/RatingIcon.vue';
import { format } from 'date-fns';
import { BaseButton } from '@/base_components/';
import {
  SHOW_LESS_TEXT,
  SHOW_MORE_TEXT,
  FEEDBACK_SHORTCUT_LENGTH
} from '@/constants.js';

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
    },

    isDeleteButtonVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isFullTextShown: false
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
      return this.isFullTextShown
        ? this.comment
        : this.comment.slice(0, FEEDBACK_SHORTCUT_LENGTH);
    },

    isButtonDisplayed() {
      return this.comment.length > FEEDBACK_SHORTCUT_LENGTH;
    },

    readMoreText() {
      return this.isFullTextShown ? SHOW_LESS_TEXT : SHOW_MORE_TEXT;
    }
  },

  methods: {
    toggleTextMode() {
      this.isFullTextShown = !this.isFullTextShown;
    },

    onClickEditFeedback() {
      this.$emit('edit', this.feedbackId);
    },

    onClickDeleteFeedback() {
      this.$emit('delete', this.feedbackId);
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
  align-self: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: $shadow;
  background-color: $white;
  border-radius: $border-radius-small;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

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

  &__button {
    color: $primary;
    padding: 0 7px;
  }

  &__buttons {
    display: flex;
    gap: 10px;
  }

  &__delete-btn,
  &__edit-btn {
    font-size: 23px;
    color: $primary;
  }
}
</style>
