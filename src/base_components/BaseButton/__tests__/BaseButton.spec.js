import { shallowMount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButton, {
      methods: {
        sendDataToParent() {
          this.$emit('sendDataToParent', data);
        }
      }
    });
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButton)).toBeTruthy();
  });
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
