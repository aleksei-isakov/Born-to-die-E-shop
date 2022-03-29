import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import products from '../../../components/ProductsList/__tests__/productsMock.json';
import PlpPage from '../PlpPage.vue';
import CustomFilter from '../../../components/CustomFilter/CustomFilter.vue';
import ProductsList from '../../../components/ProductsList/ProductsList.vue';
import PlpPageModule from '../../../store/modules/PlpPage';
import Pagination from '../../../components/Pagination/Pagination';
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

let state;
let wrapper;
let store;
let actions;
let getters;
let numberOfPage = 1;
let categories = ['a', 'b', 'c'];
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    products: () => [],
    productsQuantity: () => 100,
    numberOfPage: () => 1,
    currentCategory: () => 'All categories'
  };

  actions = {
    getProductsList: jest.fn((getters.products = () => products)),
    setNumberOfPage: jest.fn((getters.numberOfPage = () => numberOfPage)),
    getCategories: jest.fn((getters.categories = () => categories))
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
      CustomFilter,
      ProductsList,
      Pagination,
      PLPSearchBar
    },

    store,
    localVue,
    propsData: {
      sortField: ''
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('PlpPage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain products list', () => {
    expect(wrapper.find('.products-list').exists()).toBe(true);
  });

  it('filters correctly by field', () => {
    wrapper.vm.changeSortField('OLD_TO_NEW');
    expect(wrapper.vm.sortField).toBe('createdAt');
  });

  it('filters correctly by order', () => {
    wrapper.vm.changeSortOrder('OLD_TO_NEW');
    expect(wrapper.vm.sortOrder).toBe('asc');
  });

  it('should not show "Nothing was found" message if search was sucssessful', () => {
    expect(wrapper.find('.search__message').exists()).toBe(false);
  });
});
