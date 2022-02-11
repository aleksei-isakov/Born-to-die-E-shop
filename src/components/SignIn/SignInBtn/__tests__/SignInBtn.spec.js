import { mount, createLocalVue } from '@vue/test-utils';
import { SignInBtn } from '@/components/SignIn';
import { BorderButton } from '@/components/TextButtons';
import { BaseButtonRouter } from '@/base_components/';

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
        BorderButton,
        BaseButtonRouter
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClickShowSignInPopup when button is clicked', () => {
    wrapper.getComponent(BorderButton).trigger('click');
    expect(mockOnClickShowSignInPopup).toHaveBeenCalled();
  });
});
