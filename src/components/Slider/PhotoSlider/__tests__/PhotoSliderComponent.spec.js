import { mount } from '@vue/test-utils';
import PhotoSliderComponent from '../PhotoSliderComponent.vue';

let wrapper;
const slideNumber = 0;
const slides = [
  {
    id: 0,
    img: 'https://picsum.photos/id/1032/900/600'
  },
  {
    id: 1,
    img: 'https://picsum.photos/id/1037/900/600'
  },
  {
    id: 2,
    img: 'https://picsum.photos/id/1035/900/600'
  },
  {
    id: 3,
    img: 'https://picsum.photos/id/1036/900/600'
  }
];
const direction = 'right';

beforeEach(() => {
  wrapper = mount(PhotoSliderComponent, {
    propsData: {
      slideNumber: slideNumber,
      slides: slides,
      direction: direction
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
  test('should return correct props', () => {
    expect(wrapper.props().slideNumber).toBe(slideNumber);
    expect(wrapper.props().slides).toBe(slides);
    expect(wrapper.props().direction).toBe(direction);
  });
  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
