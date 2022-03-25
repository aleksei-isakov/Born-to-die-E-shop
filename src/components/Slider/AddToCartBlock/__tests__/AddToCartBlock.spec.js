import Vue from 'vue';
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import AddToCartBlock from '../AddToCartBlock';
import mockCurrentUserInfo from './mockCurrentUserInfo';
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

  vuetify = new Vuetify();

  beforeEach(() => {
    getters = {
      currentUserInfo: () => mockCurrentUserInfo
    };

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
      vuetify,
      propsData: {
        rating: 3
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render add-to-cart-block for user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain auth-block if user is signed in', () => {
    expect(wrapper.find('.auth-block__wrapper').exists()).toBe(true);
  });
});

describe('AddToCartBlock', () => {
  let wrapper;
  let state;
  let store;
  let getters;
  let vuetify;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  vuetify = new Vuetify();

  beforeEach(() => {
    getters = {
      currentUserInfo: () => null
    };

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
      vuetify,
      propsData: {
        rating: 3
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should not contain auth-block if user is not signed in', () => {
    expect(wrapper.find('.auth-block__wrapper').exists()).toBe(false);
  });
});
