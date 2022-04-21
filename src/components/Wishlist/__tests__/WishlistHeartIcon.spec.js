import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import WishlistHeartIcon from '../WishlistHeartIcon.vue';

describe('WishlistHeartIcon', () => {
  let wrapper;
  let state;
  let store;
  let getters;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  beforeEach(() => {
    getters = {
      isConsumer: () => true
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

    wrapper = mount(WishlistHeartIcon, {
      store,
      localVue,
      propsData: {
        isChecked: false
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render wishlist heart for user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display wishlist heart if user is signed in', () => {
    expect(wrapper.find('.wishlist-heart').exists()).toBe(true);
  });
});

describe('WishlistHeartIcon', () => {
  let wrapper;
  let state;
  let store;
  let getters;
  let localVue = createLocalVue();

  localVue.use(Vuex);

  beforeEach(() => {
    getters = {
      isComsumer: () => false
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

    wrapper = mount(WishlistHeartIcon, {
      store,
      localVue,
      propsData: {
        isChecked: false
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should not display hishlist heart if user is not consumer', () => {
    expect(wrapper.find('.wishlist-heart').exists()).toBe(false);
  });
});
