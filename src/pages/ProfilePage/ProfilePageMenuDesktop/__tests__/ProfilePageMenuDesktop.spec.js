import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenuDesktop from '@/pages/ProfilePage/ProfilePageMenuDesktop/ProfilePageMenuDesktop';
import SideMenuItem from '@/components/SideMenuSection/SideMenuItem';

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

  wrapper = shallowMount(ProfilePageMenuDesktop, {
    stubs: {
      SideMenuItem
    },

    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenuDesktop', () => {
  it('renders the desktop version of ProfilePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain sidebar', () => {
    expect(wrapper.find('.profile-page-menu__sidebar').exists()).toBe(true);
  });
});
