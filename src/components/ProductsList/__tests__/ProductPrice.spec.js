import { mount } from '@vue/test-utils';
import ProductPrice from '@/components/ProductsList/ProductPrice.vue';

describe('ProductPrice', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProductPrice);

    expect(wrapper.element).toMatchSnapshot();
  });
});
