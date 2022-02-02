import { shallowMount } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButton, {
      methods: {
        sendDataToParent() {
          this.$emit('click', data);
        }
      }
    });
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButton)).toBeTruthy();
  });
  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
