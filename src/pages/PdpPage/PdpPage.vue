<template>
  <div class="pdp__wrapper page-container">
    <div class="pdp__content">
      <head-info
        :name="productInfo.name"
        :date="productInfo.createdAt"
        :price="productInfo.price"
        :discount-percentage="productInfo.discountPercentage"
        :price-with-discount="productInfo.priceWithDiscount"
      />

      <product-gallery
        :images="productInfo.images"
        :rating="productInfo.averageRating"
      />

      <product-details :description="productInfo.description" />
    </div>
    <div class="feedback-block">
      <base-text-border-button
        v-if="currentUserInfo"
        class="feedback-block__add-button"
        @click.native.stop="onClickOpenAddFeedbackForm"
      >
        ADD NEW FEEDBACK
      </base-text-border-button>

      <add-feedback-form
        :is-dialog-active="isAddDialogActive"
        :user-id="getCurrentUserId"
        @close="onClickCloseAddFeedbackForm"
      />

      <edit-feedback-form
        :key="feedbackIndex"
        :index="feedbackIndex"
        :is-dialog-active="isEditDialogActive"
        :feedback="productInfo.feedbacks[feedbackIndex]"
        @close="onClickCloseEditFeedbackForm"
      />

      <v-divider class="my-4" width="1000" />

      <h3 v-if="!isFeedbacksFieldEmpty" class="feedback-block__title">
        Rewiews
      </h3>
      <span v-if="isFeedbacksFieldEmpty" class="feedback-block__message">
        There are no comments yet. Be the first to review ☀️
      </span>
      <feedback-list
        v-else
        :feedbacks="sortedFeedbacks"
        @edit="onClickOpenEditFeedbackForm"
        @delete="onClickDeleteFeedback"
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
    ...mapGetters('PdpPageModule', ['productInfo', 'sortedFeedbacks']),

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
    ...mapActions('PdpPageModule', ['getProductInfo', 'deleteFeedback']),

    onClickOpenAddFeedbackForm() {
      this.isAddDialogActive = true;
    },

    onClickCloseAddFeedbackForm() {
      this.isAddDialogActive = false;
    },

    onClickOpenEditFeedbackForm(feedbackId) {
      this.feedbackIndex = this.productInfo.feedbacks.findIndex(
        (el) => el.id === feedbackId
      );

      this.isEditDialogActive = true;
    },

    onClickCloseForm() {
      this.isDialogActive = false;
    },

    onClickDeleteFeedback(feedbackId) {
      this.deleteFeedback(feedbackId);
    },

    onClickCloseEditFeedbackForm() {
      this.isEditDialogActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.pdp {
  &__wrapper {
    margin-bottom: 60px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 60px;
    background-color: $white;
    border: solid 1px $light-border-color;
  }
}

.feedback-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  &__message {
    font-size: 20px;
  }

  &__add-button {
    height: 60px;
  }

  &__title {
    text-align: left;
    font-size: $font-size-subtitle;
  }
}
</style>
