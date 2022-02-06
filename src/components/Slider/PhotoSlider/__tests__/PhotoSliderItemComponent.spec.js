import { mount } from '@vue/test-utils';
import PhotoSlideItemComponent from '../PhotoSlideItemComponent.vue';

let wrapper;
const direction = 'right';

beforeEach(() => {
  wrapper = mount(PhotoSlideItemComponent, {
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
