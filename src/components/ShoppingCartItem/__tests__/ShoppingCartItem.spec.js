import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import ShoppingCartItem from '@/components/ShoppingCartItem/ShoppingCartItem';
import defaultImage from '@/assets/defaultImage.jpg';
import Vuex from 'vuex';
Vue.use(Vuetify);

describe('ShoppingCartItem', () => {
  let wrapper;
  const name = 'name';
  const price = 35;
  const quantity = 1;
  const id = '0';
  let vuetify = new Vuetify();
  const imageList = [
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480'
  ];

  beforeEach(() => {
    wrapper = mount(ShoppingCartItem, {
      vuetify,
      propsData: {
        images: imageList,
        id: id,
        name: name,
        quantity: quantity,
        price: price
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should return correct props', () => {
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.props().price).toBe(price);
    expect(wrapper.props().quantity).toBe(quantity);
    expect(wrapper.props().images).toBe(imageList);
    expect(wrapper.props().id).toBe(id);
  });

  test('Should take the first image if images array is not empty', () => {
    const localThis = { images: imageList };

    expect(ShoppingCartItem.computed.getImage.call(localThis)).toBe(
      imageList[0]
    );
  });

  test('Should get default image when no images in the props', () => {
    const localThis = { images: null };

    expect(ShoppingCartItem.computed.getImage.call(localThis)).toBe(
      defaultImage
    );
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Checkbox actions', () => {
  let actions;
  let store;
  let getters;

  beforeEach(() => {
    actions = {
      checkCartItem: jest.fn(),
      uncheckCartItem: jest.fn()
    };
    getters = {
      checkedProductsInCart: (state) => state.checkedProductsInCart
    };
    store = new Vuex.Store({
      modules: {
        ShoppingCartModule: {
          namespaced: true,
          state: {
            checkedProductsInCart: []
          },
          getters,
          actions
        }
      }
    });
  });

  it('dispatches "toggleCartItemSelection" when checkbox is checked', () => {
    const wrapper = shallowMount(ShoppingCartItem, {
      store,
      localVue,
      propsData: {
        id: '1',
        price: 6,
        quantity: 6,
        name: 'name'
      }
    });

    wrapper.vm.toggleCartItemSelection(true);
    expect(actions.checkCartItem).toHaveBeenCalled();

    wrapper.vm.toggleCartItemSelection(false);
    expect(actions.uncheckCartItem).toHaveBeenCalled();
  });
});
