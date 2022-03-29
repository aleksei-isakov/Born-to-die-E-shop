import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';
import ProfilePageMenuMobile from './ProfilePageMenuMobile/ProfilePageMenuMobile.vue';
import ProfilePageMenuDesktop from './ProfilePageMenuDesktop/ProfilePageMenuDesktop.vue';

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

describe('ProfilePageMenu', () => {
  it('renders the menu of ProfilePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain desktop version of menu', () => {
    expect(wrapper.find('.profile-page-menu-desktop').exists()).toBe(true);
  });

  it('should contain mobile version of menu', () => {
    expect(wrapper.find('.profile-page-menu-mobile').exists()).toBe(true);
  });
});
