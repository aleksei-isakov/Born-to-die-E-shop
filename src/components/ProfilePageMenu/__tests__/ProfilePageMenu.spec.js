import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenu from '../ProfilePageMenu';

let state;
let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    isDesktop: () => true
  };

  store = new Vuex.Store({
    modules: {
      ProfilePageModule: {
        actions,
        getters,
        state,
        namespaced: true
      }
    }
  });

  wrapper = shallowMount(ProfilePageMenu, {
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenu', () => {
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should contain desktop version of menu', () => {
    expect(wrapper.find('profile-page-menu-desktop-stub').exists()).toBe(true);
  });
});
