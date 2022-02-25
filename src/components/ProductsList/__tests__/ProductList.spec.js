import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/ProductsList/ProductsList.vue';

describe('ProductList', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(ProductList);

    expect(wrapper.element).toMatchSnapshot();
  });
});
