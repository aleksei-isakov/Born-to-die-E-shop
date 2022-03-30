import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import PdpPage from '../../PdpPage/PdpPage.vue';
import PdpPageModule from '@/store/modules/PdpPage';

let wrapper;
let state;
let store;
let actions;
let getters;
const localVue = createLocalVue();

Vue.use(Vuetify);
localVue.use(Vuex);

const mockProductInfo = {
  id: '6f40cf0f-9841-4994-ae04-2203145592a5',
  name: 'Fantastic Soft Sausages',
  description:
    'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
  price: 852,
  images: [
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480'
  ],
  createdAt: '2022-01-31T09:22:07.577Z',
  updatedAt: '',
  feedbacks: []
};
const mockRoute = {
  params: {
    id: 1
  }
};

beforeEach(() => {
  getters = {
    productInfo: () => {}
  };

  actions = {
    getProductInfo: jest.fn((getters.productInfo = () => mockProductInfo))
  };

  store = new Vuex.Store({
    modules: {
      PdpPageModule: {
        namespaced: true,
        state,
        actions,
        getters,
        mutations: PdpPageModule.mutations
      }
    }
  });

  wrapper = shallowMount(PdpPage, {
    store,
    localVue,
    mocks: {
      $route: mockRoute
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('PdpPage.vue', () => {
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should contain pdp content', () => {
    expect(wrapper.find('.pdp__content').exists()).toBe(true);
  });
});
