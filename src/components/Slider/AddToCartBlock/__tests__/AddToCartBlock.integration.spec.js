import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import AddToCartBlock from '../AddToCartBlock';
import ShoppingCartModule from '@/store/modules/shoppingcart';
import mockCurrentUserInfo from '../mockCurrentUserInfo';

Vue.use(Vuetify);

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddToCartBlock', () => {
  let profile = {};
  let isSignIn = false;
  let store;
  let rating;
  let actions;
  let wrapper;
  let vuetify;
  let initState = {
    productsInCart: []
  };
  const mockProductInfo = {
    id: 1
  };
  const pdpGetters = {
    productInfo: () => mockProductInfo
  };
  const authGetters = {
    currentUserInfo: () => mockCurrentUserInfo
  };

  vuetify = new Vuetify();

  beforeEach(() => {
    actions = {
      addToCart: jest.spyOn(ShoppingCartModule.actions, 'addToCart')
    };
    store = new Vuex.Store({
      modules: {
        ShoppingCartModule: {
          namespaced: true,
          state: initState,
          actions,
          mutations: ShoppingCartModule.mutations
        },
        PdpPageModule: {
          namespaced: true,
          getters: pdpGetters
        },
        AuthenticationModule: {
          namespaced: true,
          getters: authGetters
        }
      }
    });
  });

  test('should add the product to cart on click', () => {
    wrapper = mount(AddToCartBlock, {
      store,
      localVue,
      vuetify,
      propsData: { profile, isSignIn, rating }
    });
    const button = wrapper.find('.add-to-cart__button');

    button.trigger('click');
    expect(actions.addToCart).toHaveBeenCalledTimes(1);
    expect(initState.productsInCart).toEqual([
      {
        ...mockProductInfo,
        quantity: 1
      }
    ]);
  });
});
