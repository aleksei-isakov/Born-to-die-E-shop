import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMobile from '@/pages/ProfilePage/ProfilePageMobile/ProfilePageMobile';
import ProfilePageDesktop from '@/pages/ProfilePage/ProfilePageDesktop/ProfilePageDesktop';
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
      ProfilePageMobile: ProfilePageMobile,
      ProfilePageDesktop: ProfilePageDesktop
    },

    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePage', () => {
  it('renders the ProfilePage as a component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain ProfilePageMobile', () => {
    expect(wrapper.find('profile-page-mobile').exists());
  });

  it('should contain ProfilePageDesktop', () => {
    expect(wrapper.find('profile-page-desktop').exists());
  });
});
