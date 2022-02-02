import { mount } from '@vue/test-utils';
import ProductList from '@/components/ProductsList/ProductsList.vue';

describe('ProductList', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProductList);

    expect(wrapper.element).toMatchSnapshot();
  });
});
