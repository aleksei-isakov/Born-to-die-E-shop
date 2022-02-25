import { shallowMount } from '@vue/test-utils';
import ProductGallery from '../ProductGallery';

let wrapper;

beforeAll(() => {
  wrapper = shallowMount(ProductGallery, {
    propsData: {
      images: [
        'http://placeimg.com/640/480',
        'http://placeimg.com/640/480',
        'http://placeimg.com/640/480'
      ]
    }
  });
});
afterAll(() => {
  wrapper.destroy();
});
describe('ProductGallery', () => {
  test('should contain Slider and AddToCartBlock components', () => {
    expect(wrapper.find('Slider', 'AddToCartBlock')).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
