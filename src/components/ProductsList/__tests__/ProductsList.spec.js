import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductList from '@/components/ProductsList/ProductsList.vue';
import productsMock from './productsMock.json';
import formatCurrency from '@/utils/formatCurrency';

let wrapper;
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.filter('currency', formatCurrency);

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
