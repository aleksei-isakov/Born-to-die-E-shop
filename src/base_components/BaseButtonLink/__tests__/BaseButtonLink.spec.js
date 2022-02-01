import { shallowMount } from '@vue/test-utils';
import BaseButtonLink from '../BaseButtonLink.vue';

describe('BaseButtonLink.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButtonLink, {
      props: {
        href: String
      },
      methods: {
        sendDataToParent() {
          this.$emit('sendDataToParent', data);
        }
      }
    });
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButtonLink)).toBeTruthy();
  });
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
