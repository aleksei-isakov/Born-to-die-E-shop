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
var faker = require('faker');

export default {
  name: 'CreateFeedbackForm',

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
        rating: 0,
        reviewerId: this.userId,
        id: faker.datatype.uuid()
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
      this.newFeedback.date = `${new Date()}`;
    },

    onSubmitClearFormData() {
      this.$refs.addFeedbackForm.clearFormData();
    },

    async onSubmitSendFeedback() {
      this.setFormCurrentDate();
      this.addFeedbackIntoProductInfo({ ...this.newFeedback });

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
