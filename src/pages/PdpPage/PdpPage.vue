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
  </div>
</template>

<script>
import HeadInfo from '@/components/HeadInfo/HeadInfo';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductGallery from '@/components/ProductGallery/ProductGallery';
import BaseTextBorderButton from '@/base_components/BaseTextButtons/BaseTextBorderButton';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PdpPage',

  components: {
    ProductDetails,
    HeadInfo,
    ProductGallery,
    BaseTextBorderButton,
    FeedbackForm
  },

  data() {
    return {
      isDialogActive: false
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo'])
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
  justify-content: center;
  padding: 40px 20px;
}

.pdp__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  width: 100%;
  background: $white;
  border: solid 1px $light-border-color;
}
</style>
