import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import MyProfileInfo from '../MyProfileInfo.vue';
import userInfo from '../__tests__/userInfoMock.json';
import AuthenticationModule from '@/store/modules/authentication';

Vue.use(Vuetify);
const localVue = createLocalVue();

localVue.use(Vuex);
let store, vuetify, wrapper;

describe('MyProfileInfo', () => {
  const mockState = {
    currentUserInfo: userInfo
  };

  beforeEach(() => {
    vuetify = new Vuetify();

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          state: mockState,
          getters: AuthenticationModule.getters,
          actions: AuthenticationModule.actions,
          mutations: AuthenticationModule.mutations
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    wrapper = shallowMount(MyProfileInfo, {
      store,
      localVue,
      vuetify,
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('shows first name error', () => {
    wrapper = shallowMount(MyProfileInfo, {
      store,
      localVue,
      vuetify,
      data() {
        return { firstName: '' };
      },
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.vm.firstNameError).toBe('The first name is required');
  });

  it('shows last name error', () => {
    wrapper = shallowMount(MyProfileInfo, {
      store,
      localVue,
      vuetify,
      data() {
        return { lastName: '1' };
      },
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.vm.lastNameError).toBe(
      'Must contain only latin letters, at least 2 symbols'
    );
  });

  it('shows email error', () => {
    wrapper = shallowMount(MyProfileInfo, {
      store,
      localVue,
      vuetify,
      data() {
        return { email: 'email' };
      },
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.vm.emailError).toBe('Invalid email');
  });
});
