import ProductDescription from '@/components/ProductsList/ProductDescription.vue';
import { mount } from '@vue/test-utils';

describe('ProductDescription', () => {
  it('shoult match snapshot', () => {
    const wrapper = mount(ProductDescription, {
      propsData: {
        category: 'Category',
        created: '',
        title: 'title',
        updated: '',
        rating: 0,
        isHorizontal: false
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
