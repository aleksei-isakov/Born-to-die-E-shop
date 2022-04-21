import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductList from '@/components/ProductsList/ProductsList.vue';
import productsMock from './productsMock.json';

let wrapper;
const localVue = createLocalVue();

beforeEach(() => {
  wrapper = shallowMount(ProductList, {
    propsData: {
      products: productsMock,
      itemsPerPage: 5,
      isHorizontal: false
    },
    stubs: ['router-link'],
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('ProductList', () => {
  it('shoult match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
