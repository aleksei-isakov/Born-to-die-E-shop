import { mount, createLocalVue } from '@vue/test-utils';
import { SignInBtn } from '@/components/SignIn';
import { BaseButtonRouter, BaseTextBorderButton } from '@/base_components/';

describe('SignInBtn', () => {
  let wrapper;
  const mockOnClickShowSignInPopup = jest.spyOn(
    SignInBtn.methods,
    'onClickShowSignInPopup'
  );

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = mount(SignInBtn, {
      localVue,
      propsData: {
        isSignIn: false
      },
      components: {
        BaseTextBorderButton,
        BaseButtonRouter
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClickShowSignInPopup when button is clicked', () => {
    wrapper.getComponent(BaseTextBorderButton).trigger('click');
    expect(mockOnClickShowSignInPopup).toHaveBeenCalled();
  });
});
