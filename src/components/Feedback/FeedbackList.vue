<template>
  <div class="feedback-list">
    <feedback-item
      v-for="feedback in getSortedFeedbacks"
      :key="feedback.id"
      :reviewer-id="feedback.reviewerId"
      :feedback-id="feedback.id"
      class="feedback-list__wrapper"
      :reviewer-name="feedback.reviewerName"
      :date="feedback.date"
      :rating="feedback.rating"
      :comment="feedback.comment"
      :is-edit-button-visible="isEditButtonVisible(feedback.reviewerId)"
      @edit="onClickEditFeedback"
    />
  </div>
</template>

<script>
import FeedbackItem from '@/components/Feedback/FeedbackItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FeedbackList',

  components: { FeedbackItem },

  props: {
    feedbacks: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapGetters('AuthenticationModule', ['currentUserInfo']),
    getSortedFeedbacks() {
      const sortedFeedbacks = this.feedbacks;

      return sortedFeedbacks.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
  },

  methods: {
    onClickEditFeedback(feedbackId) {
      this.$emit('edit', feedbackId);
    },

    isEditButtonVisible(reviewerId) {
      return this.currentUserInfo?.user.id === reviewerId ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.feedback-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
}
</style>
