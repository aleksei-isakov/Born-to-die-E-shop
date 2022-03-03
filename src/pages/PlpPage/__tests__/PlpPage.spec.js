import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import PlpPage from '../PlpPage.vue';
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
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

  wrapper = shallowMount(PlpPage, {
    stubs: {
      CustomFilter: CustomFilter,
      ProductsList: ProductsList,
      Pagination: Pagination
    },

    store,
    localVue
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
});
