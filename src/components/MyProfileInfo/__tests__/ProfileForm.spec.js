import ProfileForm from '../ProfileForm.vue';
import { mount } from '@vue/test-utils';

describe('ProfileForm', () => {
  it('emits input-change event', () => {
    const inputValue = ' that is my input! ';
    const newInputValue = 'new input';
    const wrapper = mount(ProfileForm, {
      propsData: {
        category: 'First Name'
      },
      data() {
        return { inputValue: inputValue };
      }
    });

    wrapper.vm.onInputChangeValue({ target: { value: newInputValue } });

    console.log(wrapper.emitted());
    expect(wrapper.emitted()['input']).toEqual([[newInputValue]]);
  });

  it('formats phone number correctly', () => {
    const inputValue = '79219638792';
    const wrapper = mount(ProfileForm, {
      propsData: {
        category: 'Phone number'
      }
    });

    wrapper.vm.onInputChangeValue({ target: { value: inputValue } });
    console.log(wrapper.emitted());
    expect(wrapper.emitted()['input']).toEqual([['+7 921 963 87 92']]);
  });
});
