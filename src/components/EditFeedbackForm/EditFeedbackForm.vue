<template>
  <feedback-form
    :is-editing="isEditing"
    :feedback="feedback"
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

    isEditing: {
      type: Boolean,
      default: false
    },

    isDialogActive: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo', 'isError'])
  },

  methods: {
    ...mapActions('PdpPageModule', ['updateProductInfoWithNewFeedback']),

    closeDialog() {
      this.$emit('close');
    },

    async onSubmitSendFeedback() {
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
