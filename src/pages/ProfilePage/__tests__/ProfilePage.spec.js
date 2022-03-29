import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';
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

  wrapper = shallowMount(ProfilePage, {
    stubs: {
      ProfilePageMenu: ProfilePageMenu
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

  it('should contain desktop and mobile versions for the user', () => {
    expect(wrapper.find('profile-page-menu').exists());
  });
});
