<template>
  <div class="pdp__wrapper">
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

      <base-text-border-button @click.native.stop="onClickOpenForm">
        ADD NEW FEEDBACK
      </base-text-border-button>

      <feedback-form :is-dialog-active="isDialogActive" @close="closeDialog" />
    </div>
    <v-divider class="my-4" width="1000" />
    <div class="feedback-block">
      <h3 class="feedback-block__title">Rewiews</h3>
      <span v-if="isFeedbacksFieldEmpty" class="feedback-block__message">
        There are no comments yet. Be the first to review ☀️
      </span>
      <feedback-list v-else :feedbacks="productInfo.feedbacks" />
    </div>
  </div>
</template>

<script>
import HeadInfo from '@/components/HeadInfo/HeadInfo';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductGallery from '@/components/ProductGallery/ProductGallery';
import BaseTextBorderButton from '@/base_components/BaseTextButtons/BaseTextBorderButton';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';
import FeedbackList from '@/components/Feedback/FeedbackList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PdpPage',

  components: {
    ProductDetails,
    HeadInfo,
    ProductGallery,
    BaseTextBorderButton,
    FeedbackForm,
    FeedbackList
  },

  data() {
    return {
      isDialogActive: false
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo']),

    isFeedbacksFieldEmpty() {
      return this.productInfo.feedbacks.length === 0;
    }
  },

  async mounted() {
    this.getProductInfo(this.$route.params.id);
  },

  methods: {
    ...mapActions('PdpPageModule', ['getProductInfo']),

    onClickOpenForm() {
      this.isDialogActive = true;
    },

    closeDialog() {
      this.isDialogActive = false;
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
