import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Pagination from '@/components/Pagination/Pagination';
import PlpPageModule from '@/store/modules/PlpPage';
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

const products = [
  {
    id: '8bb9dd3f-d90d-4ddb-99f7-a192a8239313',
    name: 'Sleek Fresh Computer',
    category: {
      id: '1a0a7e61-9ed1-4576-8b2f-ac7d744f9565',
      name: 'et',
      description: 'Odit quo et ratione ipsam cumque quia laboriosam.',
      createdAt: '2021-09-09T09:26:48.372Z',
      updatedAt: ''
    },
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: 457,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ],
    createdAt: '2021-12-11T11:50:43.558Z',
    updatedAt: '',
    feedbacks: [],
    averageRating: 0
  },
  {
    id: 'dc643436-5d40-4300-96f1-3d59ab4d398d',
    name: 'Gorgeous Rubber Ball',
    category: {
      id: '5d05e056-b36a-4e60-9fdd-15842654ad58',
      name: 'aut',
      description: 'Laudantium quibusdam aspernatur id eum pariatur fugit.',
      createdAt: '2021-09-12T21:27:39.475Z',
      updatedAt: ''
    },
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: 943,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ],
    createdAt: '2021-06-03T18:49:33.017Z',
    updatedAt: '',
    feedbacks: [],
    averageRating: 0
  },
  {
    id: '33d65a71-f352-475d-ae95-d4c33660673e',
    name: 'Sleek Rubber Table',
    category: {
      id: 'fa82f4d7-8bd4-40c2-a11e-4749258dc40f',
      name: 'voluptas',
      description: 'Eius nihil corporis non nostrum tempora rerum quo ea sint.',
      createdAt: '2021-09-25T07:00:39.081Z',
      updatedAt: ''
    },
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: 478,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ],
    createdAt: '2021-05-06T04:13:50.961Z',
    updatedAt: '',
    feedbacks: [],
    averageRating: 0
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
