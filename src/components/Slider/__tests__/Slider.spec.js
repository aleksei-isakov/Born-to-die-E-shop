import { mount, createLocalVue } from '@vue/test-utils';
import Slider from '../Slider.vue';

describe('Slider.vue', () => {
  let wrapper;
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = mount(Slider, {
      localVue,
      propsData: {
        images: [
          'http://placeimg.com/640/480',
          'http://placeimg.com/640/480',
          'http://placeimg.com/640/480'
        ]
      }
    });
  };

  beforeAll(() => {
    renderWrapper();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

// let wrapper;

// beforeEach(() => {
//   wrapper = mount(Slider);
// });

// afterEach(() => {
//   wrapper.destroy();
// });

// describe('Slider', () => {
//   test('is a Vue instance', () => {
//     expect(wrapper.isVueInstance).toBeTruthy();
//   });
//   test('should match snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });
