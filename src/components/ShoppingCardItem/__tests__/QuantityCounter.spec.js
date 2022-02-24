import { mount } from '@vue/test-utils';
import QuantityCounter from '@/components/ShoppingCardItem/QuantityCounter';

let wrapper;
const quantity = 1;

beforeEach(() => {
  wrapper = mount(QuantityCounter, {
    propsData: {
      quantity: quantity
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('QuantityCounter', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('should return correct props', () => {
    expect(wrapper.props().quantity).toBe(quantity);
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
