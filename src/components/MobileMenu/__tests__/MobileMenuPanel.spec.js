import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import MobileMenuPanel from '../MobileMenuPanel';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import AuthenticationModule from '@/store/modules/authentication';

Vue.use(Vuetify);

const vuetify = new Vuetify();
let wrapper;
let store;
let state;
let getters;
let actions;

describe('MobileMenuPanel', () => {
  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.use(Vuex);

    const mockUserInfo = {
      accessToken: 'token',
      user: {
        id: '123'
      }
    };

    state = {
      currentUserInfo: mockUserInfo
    };

    getters = {
      currentUserInfo: (state) => state.currentUserInfo
    };

    actions = {
      clearCurrentUser: jest.spyOn(
        AuthenticationModule.actions,
        'clearCurrentUser'
      )
    };

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          state,
          actions,
          mutations: AuthenticationModule.mutations,
          getters
        }
      }
    });

    wrapper = mount(MobileMenuPanel, {
      store,
      localVue,
      vuetify,
      propsData: {
        isVisible: false
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should show profile link if user is logged in', () => {
    expect(wrapper.find('a:last-child').props().to).toBe('/profile');
  });

  it('should emit event when the panel closes', () => {
    wrapper.vm.onInputCloseMobileMenuPanel(false);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('should not emit event when the panel opens', () => {
    wrapper.vm.onInputCloseMobileMenuPanel(true);
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should match a snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should not show profile link if user is not logged in', async () => {
    store.dispatch('AuthenticationModule/clearCurrentUser');

    await wrapper.vm.$nextTick();

    expect(wrapper.find('a:last-child').props().to).toBe('/cart');
  });
});
