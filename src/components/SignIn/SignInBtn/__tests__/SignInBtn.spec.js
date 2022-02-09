import { mount, createLocalVue } from '@vue/test-utils';
import { SignInBtn } from '@/components/SignIn';
import { BorderButton } from '@/components/TextButtons';
import { BaseButtonRouter } from '@/base_components/';

describe('SignInBtn', () => {
  let wrapper;

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
});
