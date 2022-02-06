import { mount } from '@vue/test-utils';
import MiniGalleryComponent from '../MiniGalleryComponent.vue';

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

beforeEach(() => {
  wrapper = mount(MiniGalleryComponent, {
    propsData: {
      slideNumber: slideNumber,
      slides: slides
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('MiniGallery', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should return correct props', () => {
    expect(wrapper.props().slideNumber).toBe(slideNumber);
    expect(wrapper.props().slides).toBe(slides);
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
