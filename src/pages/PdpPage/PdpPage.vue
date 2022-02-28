<template>
  <div class="pdp__wrapper">
    <div class="pdp__content">
      <HeadInfo
        :name="productInfo.name"
        :date="productInfo.createdAt"
        :price="productInfo.price"
      />
      <ProductGallery :images="productInfo.images" />
      <ProductDetails :description="productInfo.description" />

      <!-- <BaseTextBorderButton @click="onClickToggleDialog">
        ADD NEW FEEDBACK
      </BaseTextBorderButton> -->
      <FeedbackForm v-if="dialog" @closeForm="closeForm" />
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
    // BaseTextBorderButton,
    FeedbackForm
  },

  data() {
    return {
      dialog: false
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
    onClickToggleDialog() {
      this.dialog = !this.dialog;
    },
    closeForm(data) {
      console.log(data);
      this.dialog = data;
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
