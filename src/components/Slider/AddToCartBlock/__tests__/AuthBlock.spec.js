import { mount, createLocalVue } from '@vue/test-utils';
import AuthBlock from '../AuthBlock';

let wrapper;
let localVue = createLocalVue();
let profile = {};
let isSignIn = false;

describe('AuthBlock', () => {
  test('is a Vue instance', () => {
    wrapper = mount(AuthBlock, {
      localVue,
      propsData: { profile, isSignIn }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
