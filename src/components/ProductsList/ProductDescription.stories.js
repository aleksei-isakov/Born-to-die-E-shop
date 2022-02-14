import ProductDescription from './ProductDescription.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ProductDescription'
};

const ProductDescriptionTemplate = (args) => ({
  components: { ProductDescription },
  props: Object.keys(args),
  template: '<ProductDescription v-bind="$props" />'
});

export const Default = ProductDescriptionTemplate.bind({});

export const WithAnotherTitle = ProductDescriptionTemplate.bind({});

const unixTimestamp = 1549312452;

// About args https://storybook.js.org/blog/introducing-storybook-args/
// https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  title: 'Product details title',
  field: 'Product details field',
  created: new Date(unixTimestamp),
  updated: new Date()
};

WithAnotherTitle.args = {
  title: 'Another title',
  field: 'Product details field',
  created: new Date(unixTimestamp),
  updated: new Date()
};
