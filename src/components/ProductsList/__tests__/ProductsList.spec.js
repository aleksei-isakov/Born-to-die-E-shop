import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductList from '@/components/ProductsList/ProductsList.vue';
import productsMock from './productsMock.json';

let wrapper;
let store;
const shoppingCartGetter = {
  productsInCart: () => productsMock
};
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      ShoppingCartModule: {
        namespaced: true,
        getters: shoppingCartGetter
      }
    }
  });

  wrapper = mount(ProductList, {
    propsData: {
      products: productsMock,
      itemsPerPage: 5,
      isHorizontal: false
    },
    stubs: ['router-link'],
    store,
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
