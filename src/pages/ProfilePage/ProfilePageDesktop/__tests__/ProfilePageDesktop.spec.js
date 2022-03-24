import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageDesktop from '@/pages/ProfilePage/ProfilePageDesktop/ProfilePageDesktop';
import BaseButtonRouter from '@/base_components/BaseButtonRouter/BaseButtonRouter';

let state;
let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    isDesktop: () => true,
    isMobile: () => false
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

  wrapper = shallowMount(ProfilePageDesktop, {
    stubs: {
      BaseButtonRouter: BaseButtonRouter
    },

    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageDesktop', () => {
  it('renders the desktop version of ProfilePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain sidebar', () => {
    expect(wrapper.find('.profile-page__sidebar').exists()).toBe(true);
  });
});
