<template>
  <feedback-form
    :is-editing="isEditing"
    :feedback="editedFeedback"
    :is-dialog-active="isDialogActive"
    @close="closeDialog"
    @submit="onSubmitSendFeedback"
  />
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditFeedbackForm',

  components: { FeedbackForm },

  props: {
    feedback: {
      type: Object,
      default: () => {}
    },

    index: {
      type: Number,
      default: 0
    },

    isEditing: {
      type: Boolean,
      default: false
    },

    isDialogActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      editedFeedback: { ...this.feedback }
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo', 'isError'])
  },

  methods: {
    ...mapActions('PdpPageModule', ['updateProductInfoWithNewFeedback']),

    closeDialog() {
      this.editedFeedback = { ...this.feedback };
      this.$emit('close');
    },

    async onSubmitSendFeedback() {
      this.productInfo.feedbacks[this.index] = this.editedFeedback;
      const payload = {
        productId: this.$route.params.id,
        updatedProductInfo: this.productInfo
      };

      await this.updateProductInfoWithNewFeedback(payload);

      if (!this.isError) {
        this.closeDialog();
      }
    }
  }
};
</script>
