import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenuMobile from '@/pages/ProfilePage/ProfilePageMenuMobile/ProfilePageMenuMobile';
import ProfilePageMenuDesktop from '@/pages/ProfilePage/ProfilePageMenuDesktop/ProfilePageMenuDesktop';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

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

  wrapper = shallowMount(ProfilePage, {
    stubs: {
      ProfilePageMenuMobile: ProfilePageMenuMobile,
      ProfilePageMenuDesktop: ProfilePageMenuDesktop
    },

    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePage', () => {
  it('should render profile page for the user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain mobile version for the user', () => {
    expect(wrapper.find('profile-page-menu-mobile').exists());
  });

  it('should contain desktop version for the user', () => {
    expect(wrapper.find('profile-page-menu-desktop').exists());
  });
});
