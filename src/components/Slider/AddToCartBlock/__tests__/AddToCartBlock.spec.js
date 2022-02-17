import { mount, createLocalVue } from '@vue/test-utils';
import AddToCartBlock from '../AddToCartBlock';

let wrapper;
let localVue = createLocalVue();
let mockprofile = {};
let isUserLoggedIn = '';

describe('AddToCartBlock', () => {
  test('is a Vue instance', () => {
    wrapper = mount(AddToCartBlock, {
      localVue,
      propsData: { mockprofile, isUserLoggedIn }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
