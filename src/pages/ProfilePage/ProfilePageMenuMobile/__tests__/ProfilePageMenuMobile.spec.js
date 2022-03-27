import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenuMobile from '@/pages/ProfilePage/ProfilePageMenuMobile/ProfilePageMenuMobile';
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
    isDesktop: () => false,
    isMobile: () => true
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

  wrapper = shallowMount(ProfilePageMenuMobile, {
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

describe('ProfilePageMenuMobile', () => {
  it('renders the mobile version of ProfilePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain bottombar', () => {
    expect(wrapper.find('.profile-page-menu__bottombar').exists()).toBe(true);
  });
});
