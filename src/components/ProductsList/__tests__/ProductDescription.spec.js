import ProductDescription from '@/components/ProductsList/ProductDescription.vue';
import { mount } from '@vue/test-utils';

describe('ProductDescription', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProductDescription, {
      propsData: {
        category: 'Category',
        created: '',
        title: 'title',
        upated: '',
        isHorizontal: false
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
