import { mount, createLocalVue } from '@vue/test-utils';
import AuthBlock from '../AuthBlock';
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

let wrapper;
let localVue = createLocalVue();
let userName = '';

describe('AuthBlock', () => {
  let vuetify = new Vuetify();

  test('is a Vue instance', () => {
    wrapper = mount(AuthBlock, {
      localVue,
      vuetify,
      propsData: { userName }
    });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
