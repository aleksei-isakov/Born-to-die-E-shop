<template>
  <div class="pdp__wrapper page-container">
    <div class="pdp__content">
      <head-info
        :name="productInfo.name"
        :date="productInfo.createdAt"
        :price="productInfo.price"
      />

      <product-gallery
        :images="productInfo.images"
        :rating="productInfo.averageRating"
      />

      <product-details :description="productInfo.description" />

      <base-text-border-button @click.native.stop="openAddFeedbackForm">
        ADD NEW FEEDBACK
      </base-text-border-button>

      <add-feedback-form
        :is-dialog-active="isAddDialogActive"
        :user-id="getCurrentUserId"
        @close="closeAddFeedbackForm"
      />

      <edit-feedback-form
        :key="feedbackIndex"
        :index="feedbackIndex"
        :is-dialog-active="isEditDialogActive"
        :feedback="productInfo.feedbacks[feedbackIndex]"
        @close="closeEditFeedbackForm"
      />
    </div>
    <v-divider class="my-4" width="1000" />
    <div class="feedback-block">
      <h3 class="feedback-block__title">Rewiews</h3>
      <span v-if="isFeedbacksFieldEmpty" class="feedback-block__message">
        There are no comments yet. Be the first to review ☀️
      </span>
      <feedback-list
        v-else
        :feedbacks="productInfo.feedbacks"
        @edit="openEditFeedbackForm"
      />
    </div>
  </div>
</template>

<script>
import HeadInfo from '@/components/HeadInfo/HeadInfo';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductGallery from '@/components/ProductGallery/ProductGallery';
import BaseTextBorderButton from '@/base_components/BaseTextButtons/BaseTextBorderButton';
import AddFeedbackForm from '@/components/FeedbackForm/AddFeedbackForm';
import FeedbackList from '@/components/Feedback/FeedbackList.vue';
import { mapGetters, mapActions } from 'vuex';
import EditFeedbackForm from '@/components/FeedbackForm/EditFeedbackForm.vue';

export default {
  name: 'PdpPage',

  components: {
    ProductDetails,
    HeadInfo,
    ProductGallery,
    BaseTextBorderButton,
    AddFeedbackForm,
    FeedbackList,
    EditFeedbackForm
  },

  data() {
    return {
      isAddDialogActive: false,
      isEditDialogActive: false,
      feedbackIndex: null
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo']),
    ...mapGetters('AuthenticationModule', ['currentUserInfo']),

    isFeedbacksFieldEmpty() {
      return this.productInfo.feedbacks.length === 0;
    },

    getCurrentUserId() {
      return this.currentUserInfo?.user.id;
    }
  },

  async mounted() {
    this.getProductInfo(this.$route.params.id);
  },

  methods: {
    ...mapActions('PdpPageModule', ['getProductInfo']),

    openAddFeedbackForm() {
      this.isAddDialogActive = true;
    },

    closeAddFeedbackForm() {
      this.isAddDialogActive = false;
    },

    openEditFeedbackForm(feedbackId) {
      this.feedbackIndex = this.productInfo.feedbacks.findIndex(
        (el) => el.id === feedbackId
      );

      this.isEditDialogActive = true;
    },

    closeEditFeedbackForm() {
      this.isEditDialogActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.pdp__wrapper {
  display: flex;
  align-items: center;
  padding: 40px 20px;
  flex-direction: column;
}

.pdp__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  background: $white;
  border: solid 1px $light-border-color;
}

.feedback-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;

  &__title {
    margin-bottom: 20px;
    font-size: 32px;
    text-align: left;
    font-weight: 400;
  }

  &__message {
    font-size: 20px;
  }
}
</style>
