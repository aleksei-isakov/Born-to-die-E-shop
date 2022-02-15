<template>
  <div class="pdp__wrapper">
    <head-info :name="name" />
    <slider class="slider" />
    <product-details
      :product-description="productDescription"
      class="productDetails"
    />
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import HeadInfo from '@/components/HeadInfo/HeadInfo';
import description from './PdpPageMock.json';

export default {
  name: 'PdpPage',

  components: { ProductDetails, Slider, HeadInfo },

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
