<template>
  <div class="pdp__wrapper">
    <head-info :name="name" />
    <product-gallery class="slider" />
    <product-details
      :product-description="productDescription"
      class="productDetails"
    />
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import HeadInfo from '@/components/HeadInfo/HeadInfo';
import description from './PdpPageMock.json';
import ProductGallery from '@/components/ProductGallery/ProductGallery';

export default {
  name: 'PdpPage',

  components: { ProductGallery, ProductDetails, HeadInfo },

  data: () => ({
    productDescription: description.description,

    name: 'Airpods'
  })
};
</script>

<style scoped>
.pdp__wrapper {
  display: flex;
  flex-direction: column;
  margin: 7% 20% 0 25%;
  border: 2px solid rgb(228, 228, 228);
}

.productDetails {
  margin-bottom: 5%;
}

@media screen and (max-width: 767px) {
  .pdp__wrapper {
    margin: 18% 3% 0 3%;
  }

  .productDetails {
    margin-bottom: 15%;
  }
}
</style>
