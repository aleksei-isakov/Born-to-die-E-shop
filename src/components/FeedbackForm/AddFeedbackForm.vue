<template>
  <feedback-form
    ref="addFeedbackForm"
    :feedback="newFeedback"
    :is-dialog-active="isDialogActive"
    @close="closeDialog"
    @submit="onSubmitSendFeedback"
  />
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddFeedbackForm',

  components: { FeedbackForm },

  props: {
    userId: {
      type: String,
      default: ''
    },

    isDialogActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      newFeedback: {
        reviewerName: null,
        comment: null,
        date: null,
        rating: 0
      }
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo', 'isError'])
  },

  methods: {
    ...mapActions('PdpPageModule', [
      'updateProductInfoWithNewFeedback',
      'addFeedbackIntoProductInfo'
    ]),

    closeDialog() {
      this.$emit('close');
    },

    setFormCurrentDate() {
      this.newFeedback.date = Date();
    },

    onSubmitClearFormData() {
      this.$refs.addFeedbackForm.clearFormData();
    },

    async onSubmitSendFeedback() {
      this.setFormCurrentDate();
      this.addFeedbackIntoProductInfo({
        ...this.newFeedback,
        id: crypto.randomUUID(),
        reviewerId: this.userId
      });

      const payload = {
        productId: this.$route.params.id,
        updatedProductInfo: this.productInfo
      };

      await this.updateProductInfoWithNewFeedback(payload);

      if (!this.isError) {
        this.onSubmitClearFormData();
        this.closeDialog();
      }
    }
  }
};
</script>
