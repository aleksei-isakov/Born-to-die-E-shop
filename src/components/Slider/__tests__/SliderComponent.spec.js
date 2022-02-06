import { mount } from '@vue/test-utils';
import SliderComponent from '../SliderComponent.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(SliderComponent);
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
