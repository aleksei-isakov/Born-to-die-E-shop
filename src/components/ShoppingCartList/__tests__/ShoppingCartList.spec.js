import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList';
Vue.use(Vuetify);

const vuetify = new Vuetify();
const productsInCart = [
  {
    id: '0',
    name: 'name',
    price: 20,
    quantity: 1,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ]
  },
  {
    id: '1',
    name: 'name',
    price: 30,
    quantity: 1,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ]
  }
];
const totalPrice = 50;

describe('ShoppingCartList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ShoppingCartList, {
      vuetify,
      propsData: {
        productsInCart: productsInCart,
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

  test('should display correct total price', () => {
    expect(wrapper.find('.cart-list__total-price').text()).toBe(
      `Total Price: ${totalPrice} $`
    );
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
