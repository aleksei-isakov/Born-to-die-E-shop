import Vue from 'vue';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import AddToCartBlock from '../AddToCartBlock';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

describe('AddToCartBlock', () => {
  let wrapper;
  let state;
  let store;
  let getters;
  let vuetify;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  const mockCurrentUserInfo = {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwiaWF0IjoxNjQ2MzAwNjEwLCJleHAiOjE2NDYzMDQyMTAsInN1YiI6IjY0ZGVmZGFmLTczZjgtNDA0My1iMWI3LTJlNzMxN2JjMWJjNyJ9.7M2u0AIstncwR8vBJRF_EGVbKNTrQi1RO6j4Ola9tAY',
    user: {
      id: '64defdaf-73f8-4043-b1b7-2e7317bc1bc7',
      email: 'admin@test.com',
      firstName: 'Admin',
      lastName: 'Adminson',
      birthDate: '2021-08-22T09:51:09.630Z',
      role: 'ADMIN',
      cart: { products: [], totalQuantity: 0, totalPrice: 0 },
      createdAt: '2022-01-12T21:16:33.953Z',
      updatedAt: ''
    }
  };

  beforeEach(() => {
    getters = {
      currentUserInfo: () => mockCurrentUserInfo
    };

    vuetify = new Vuetify();

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          state,
          getters
        }
      }
    });

    wrapper = mount(AddToCartBlock, {
      store,
      localVue,
      vuetify
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
