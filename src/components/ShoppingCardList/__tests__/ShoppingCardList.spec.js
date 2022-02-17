import { mount } from '@vue/test-utils';
import ShoppingCardList from '@/components/ShoppingCardList/ShoppingCardList';

let wrapper;

beforeEach(() => {
  wrapper = mount(ShoppingCardList);
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
