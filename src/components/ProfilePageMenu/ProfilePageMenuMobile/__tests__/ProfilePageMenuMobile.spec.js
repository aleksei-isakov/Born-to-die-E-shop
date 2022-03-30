import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ProfilePageMenuMobile from '@/components/ProfilePageMenu/ProfilePageMenuMobile/ProfilePageMenuMobile';
import { BaseButtonRouter } from '@/base_components';

let state;
let wrapper;
let store;
let actions;
let getters;
const router = new VueRouter();
const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(Vuex);

beforeEach(() => {
  getters = {
    isDesktop: () => false
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
    localVue,
    router
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenuMobile', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain bottombar', () => {
    expect(wrapper.find('.profile-page-menu__bottombar').exists()).toBe(true);
  });
});
