import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Pagination from '@/components/Pagination/Pagination';
import PlpPageModule from '@/store/modules/PlpPage';

const products = [
  {
    description: {
      title: 'Soft Soap',
      field: 'HOME',
      created: '2022-02-02T10:25:52.266Z',
      updated: '2022-02-02T10:25:52.266Z'
    },
    image: null,
    price: 800.7263828,
    id: '1'
  },
  {
    description: {
      title: 'Wooden Chair',
      field: 'HOME',
      created: '2022-02-02T10:25:52.266Z',
      updated: '2022-02-02T10:25:52.266Z'
    },
    image: null,
    price: 800,
    id: '2'
  },
  {
    description: {
      title: 'Plastic Salad',
      field: 'GAMES',
      created: '2022-02-02T10:25:52.266Z',
      updated: '2022-02-02T10:25:52.266Z'
    },
    image: null,
    price: 800,
    id: '3'
  }
];
const paginationLength = 9;
let state;
let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    products: () => [],
    productsQuantity: Number
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

  wrapper = shallowMount(Pagination, {
    store,
    localVue,
    propsData: {
      paginationLength: paginationLength
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Pagination', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain pagination container', () => {
    expect(wrapper.find('.pagination__wrapper').exists()).toBe(true);
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
