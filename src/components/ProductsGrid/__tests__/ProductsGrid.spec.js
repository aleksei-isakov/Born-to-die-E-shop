import { mount, createLocalVue } from '@vue/test-utils';
import ProductsGrid from '../ProductsGrid';

let wrapper;
let localVue = createLocalVue();
let products = [];
let itemsPerPage = 0;

describe('ProductsGrid', () => {
  test('is a Vue instance', () => {
    wrapper = mount(ProductsGrid, {
      localVue,
      propsData: { products, itemsPerPage }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
