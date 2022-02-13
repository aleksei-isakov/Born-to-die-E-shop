<template>
  <div class="pdp__wrapper">
    <HeadInfo :name="name" />
    <Slider class="slider" />
    <ProductDetails
      :productDescription="productDescription"
      class="productDetails"
    />
  </div>
</template>

<script>
import Slider from '@/components/Slider/Slider';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import HeadInfo from '@/components/HeadInfo/HeadInfo';

export default {
  name: 'PdpPage',

  components: { ProductDetails, Slider, HeadInfo },

  data: () => ({
    productDescription:
      'AirPods Pro — уникальные наушники с технологией активного шумоподавления, которые непрерывно оптимизируют звучание с учётом формы вашего уха и положения вкладышей. Они отлично заглушают внешние шумы, поэтому вы можете полностью погрузиться в музыку. Наружный микрофон улавливает внешние шумы. Эти шумы компенсируются обратной звуковой волной той же амплитуды — прежде чем вы их услышите. Внутренний микрофон анализирует звук внутри уха и таким же образом подавляет оставшийся шум обратной звуковой волной. В комплекте есть три пары мягких силиконовых вкладышей, которые легко фиксируются на наушнике. Специальный тест поможет выбрать размер вкладышей для оптимальной посадки и лучшего звука. Внутри каждого вкладыша есть особая коническая полость, которая помогает ему лучше адаптироваться к геометрии уха и надёжнее держать наушник. А отверстия во вкладышах позволяют выравнять давление, поэтому наушники будут для вас совершенно незаметны.',

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
