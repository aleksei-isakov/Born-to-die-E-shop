import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import PdpPage from '../../PdpPage/PdpPage.vue';
import PdpPageModule from '@/store/modules/PdpPage';
import { mockProductInfo } from '@/mocks';

let wrapper;
let state;
let store;
let actions;
let getters;
const localVue = createLocalVue();

Vue.use(Vuetify);
localVue.use(Vuex);

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

  const authGetters = {
    currentUserInfo: () => null
  };

  store = new Vuex.Store({
    modules: {
      PdpPageModule: {
        namespaced: true,
        state,
        actions,
        getters,
        mutations: PdpPageModule.mutations
      },
      AuthenticationModule: {
        namespaced: true,
        getters: authGetters
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
