import { shallowMount } from '@vue/test-utils';
import ProductGallery from '../ProductGallery';

let wrapper;

beforeAll(() => {
  wrapper = shallowMount(ProductGallery);
});
afterAll(() => {
  wrapper.destroy();
});
describe('ProductGallery', () => {
  test('should contain Slider and AddToCardBlock components', () => {
    expect(wrapper.find('Slider', 'AddToCardBlock')).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
