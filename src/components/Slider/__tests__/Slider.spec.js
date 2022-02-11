import { mount } from '@vue/test-utils';
import Slider from '../Slider.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(Slider);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Slider', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
