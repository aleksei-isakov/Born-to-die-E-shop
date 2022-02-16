import { shallowMount } from '@vue/test-utils';
import ShoppingCartPage from '../ShoppingCartPage';

let wrapper;

beforeAll(() => {
  wrapper = shallowMount(ShoppingCartPage);
});
afterAll(() => {
  wrapper.destroy();
});
describe('ShoppingCartPage', () => {
  test('should be a Vue instance ', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
