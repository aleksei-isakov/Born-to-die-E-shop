import ProductDetails from './ProductDetails.vue';

export default {
  title: 'ProductDetails',
  component: ProductDetails
};

const ProductDetailsTemplate = (args) => ({
  components: { ProductDetails },
  props: Object.keys(args),
  template: '<ProductDetails v-bind="$props" />'
});

export const Default = ProductDetailsTemplate.bind({});
