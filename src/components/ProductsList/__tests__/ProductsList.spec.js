import { mount } from '@vue/test-utils';
import ProductList from '@/components/ProductsList/ProductsList.vue';
import productsMock from './productsMock.json';

describe('ProductList', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        products: productsMock,
        itemsPerPage: 5,
        isHorizontal: false
      },
      stubs: ['router-link']
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
