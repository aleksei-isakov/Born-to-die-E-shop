import { mount } from '@vue/test-utils';
import PhotoSlideItem from '../PhotoSlideItem.vue';

let wrapper;
const direction = 'right';

beforeEach(() => {
  wrapper = mount(PhotoSlideItem, {
    propsData: {
      direction: direction
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('PhotoSlideItem', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('should return correct props', () => {
    expect(wrapper.props().direction).toBe(direction);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
