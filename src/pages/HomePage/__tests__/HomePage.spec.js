import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import products from '@/components/ProductsList/productsMock.json';
import HomePage from '../HomePage.vue';
import PlpSearchBar from '@/components/PlpSearchBar/PlpSearchBar.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';

let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    productsList: () => []
  };
  actions = {
    getProductsList: jest.fn((getters.productsList = () => products))
  };
  store = new Vuex.Store({
    modules: {
      ProductsModule: {
        actions,
        getters,
        namespaced: true
      }
    }
  });
  wrapper = shallowMount(HomePage, {
    stubs: {
      PlpSearchBar: PlpSearchBar,
      ProductsList: ProductsList
    },
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

const getProductsList = () => wrapper.find('.products-list');

describe('HomePage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain products list', () => {
    expect(getProductsList().exists()).toBe(true);
  });
});
