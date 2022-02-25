import { mount } from '@vue/test-utils';
import ShoppingCardList from '@/components/ShoppingCardList/ShoppingCardList';

const shoppingCartData = [
  {
    description: 'description',
    price: 35,
    quantity: 1
  },
  {
    description: 'description',
    price: 36,
    quantity: 1
  },
  {
    description: 'description',
    price: 37,
    quantity: 1
  },
  {
    description: 'description',
    price: 38,
    quantity: 1
  }
];
let wrapper;

beforeEach(() => {
  wrapper = mount(ShoppingCardList, {
    propsData: {
      shoppingCartData: shoppingCartData
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('PhotoSlider', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
