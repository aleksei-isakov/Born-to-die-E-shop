import { shallowMount } from '@vue/test-utils';
import SignInBtn from '@/components/SignIn/SignInBtn/SignInBtn.vue';

describe('SignInBtn', () => {
  it('renders correctly', () => {
    const component = shallowMount(SignInBtn, {
      propsData: {
        isSignIn: false
      }
    });

    expect(component).toMatchSnapshot();
  });
});
