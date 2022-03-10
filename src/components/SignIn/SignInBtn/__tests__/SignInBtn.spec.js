import { mount, createLocalVue } from '@vue/test-utils';
import { SignInBtn } from '@/components/SignIn';
import { BaseButtonRouter, BaseTextBorderButton } from '@/base_components/';
import Vuex from 'vuex';

describe('SignInBtn', () => {
  let wrapper;
  let state;
  let store;
  let getters;
  const mockOnClickShowSignInPopup = jest.spyOn(
    SignInBtn.methods,
    'onClickShowSignInPopup'
  );

  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.use(Vuex);

    getters = {
      currentUserInfo: () => {}
    };

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          state,
          getters
        }
      }
    });

    wrapper = mount(SignInBtn, {
      store,
      localVue,
      components: {
        BaseTextBorderButton,
        BaseButtonRouter
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClickShowSignInPopup when button is clicked', () => {
    wrapper.getComponent(BaseTextBorderButton).trigger('click');
    expect(mockOnClickShowSignInPopup).toHaveBeenCalled();
  });
});
