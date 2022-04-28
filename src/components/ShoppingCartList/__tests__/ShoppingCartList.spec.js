import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
import { mockProductsInCartGroupedBySeller } from '@/mocks';
import formatCurrency from '@/utils/formatCurrency';
Vue.use(Vuetify);

const vuetify = new Vuetify();
const totalPrice = 50;

Vue.filter('currency', formatCurrency);

describe('ShoppingCartList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ShoppingCartList, {
      vuetify,
      propsData: {
        productsGroupList: mockProductsInCartGroupedBySeller,
        totalPrice: totalPrice
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
