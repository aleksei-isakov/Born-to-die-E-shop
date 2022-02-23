// import { shallowMount } from '@vue/test-utils';
// import PlpPage from '../PlpPage.vue';

// describe('PlpPage', () => {
//   it('renders a valid snapshot', () => {
//     const wrapper = shallowMount(PlpPage);

//     expect(wrapper).toMatchSnapshot();
//   });
// });
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import products from '@/components/ProductsList/productsMock.json';
import PlpPage from '../PlpPage.vue';
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import PlpPageModule from '@/store/modules/PlpPage';

let state;
// let mutations;
let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    products: () => []
  };
  actions = {
    getProducts: jest.fn((getters.products = () => products))
  };
  store = new Vuex.Store({
    modules: {
      PlpPageModule: {
        actions,
        getters,
        state,
        mutations: PlpPageModule.mutations,
        namespaced: true
      }
    }
  });
  wrapper = shallowMount(PlpPage, {
    stubs: {
      CustomFilter: CustomFilter,
      ProductsList: ProductsList
    },
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

//const getProductsList = () => wrapper.find('.products-list');

describe('PlpPage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain products list', () => {
    expect(wrapper.find('.products-list').exists()).toBe(true);
  });
});
