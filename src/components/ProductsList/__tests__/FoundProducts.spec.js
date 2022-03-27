import { mount } from '@vue/test-utils';
import FoundProducts from '@/components/ProductsList/FoundProducts.vue';

const productsQuantity = 20;

describe('FoundProducts', () => {
  let wrapper = mount(FoundProducts, {
    propsData: {
      productsQuantity
    }
  });

  it('should show the user the number of found products', () => {
    expect(wrapper.find('.found-products').text()).toBe(
      `Found: ${productsQuantity}`
    );
  });

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
