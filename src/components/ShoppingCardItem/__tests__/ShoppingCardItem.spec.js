import { mount } from '@vue/test-utils';
import ShoppingCardItem from '@/components/ShoppingCardItem/ShoppingCardItem';
import defaultImage from '@/assets/defaultImage.jpg';

let wrapper;
const description = 'description';
const price = 35;
const quantity = 1;

beforeEach(() => {
  wrapper = mount(ShoppingCardItem, {
    propsData: {
      description: description,
      price: price,
      quantity: quantity,
      image: defaultImage
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ShoppingCardItem', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('should return correct props', () => {
    expect(wrapper.props().description).toBe(description);
    expect(wrapper.props().price).toBe(price);
    expect(wrapper.props().quantity).toBe(quantity);
    expect(wrapper.props().image).toBe(defaultImage);
  });
  test('Should get default image when no image in the props', () => {
    const localThis = { image: null };

    expect(ShoppingCardItem.computed.getImage.call(localThis)).toBe(
      defaultImage
    );
  });
  test('gets price', () => {
    const localThis = { price: 35, quantity: 1 };

    expect(ShoppingCardItem.computed.getPrice.call(localThis)).toBe(35);
  });
  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
