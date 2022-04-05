import MyProfileInfo from '../MyProfileInfo.vue';
import { shallowMount } from '@vue/test-utils';

describe('MyProfileInfo', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MyProfileInfo, {
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
  it('shows first name error', () => {
    const wrapper = shallowMount(MyProfileInfo, {
      data() {
        return { firstName: '' };
      },
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.vm.firstNameError).toBe('The first name is required');
  });

  it('shows last name error', () => {
    const wrapper = shallowMount(MyProfileInfo, {
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
    const wrapper = shallowMount(MyProfileInfo, {
      data() {
        return { email: 'email' };
      },
      stubs: { 'md-datepicker': true }
    });

    expect(wrapper.vm.emailError).toBe('Invalid email');
  });
});
