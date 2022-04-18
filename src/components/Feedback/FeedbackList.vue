<template>
  <div class="feedback-list">
    <feedback-item
      v-for="feedback in feedbacks"
      :key="feedback.id"
      :reviewer-id="feedback.reviewerId"
      :feedback-id="feedback.id"
      :reviewer-name="feedback.reviewerName"
      :date="feedback.date"
      :rating="feedback.rating"
      :comment="feedback.comment"
      class="feedback-list__wrapper"
      :is-delete-button-visible="isDeleteButtonVisible(feedback.reviewerId)"
      :is-edit-button-visible="isEditButtonVisible(feedback.reviewerId)"
      @edit="onClickEditFeedback"
      @delete="onClickDeleteFeedback"
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
    ...mapGetters('AuthenticationModule', ['currentUserInfo', 'isAdmin'])
  },

  methods: {
    onClickEditFeedback(feedbackId) {
      this.$emit('edit', feedbackId);
    },

    onClickDeleteFeedback(feedbackId) {
      this.$emit('delete', feedbackId);
    },

    isEditButtonVisible(reviewerId) {
      return this.currentUserInfo?.user.id === reviewerId;
    },

    isDeleteButtonVisible(reviewerId) {
      return this.isAdmin || this.currentUserInfo?.user?.id === reviewerId;
    }
  }
};
</script>

<style lang="scss" scoped>
.feedback-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
}
</style>
