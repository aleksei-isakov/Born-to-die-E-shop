import { shallowMount } from '@vue/test-utils';
import BaseButtonRouter from '../BaseButtonRouter.vue';

describe('BaseButtonRouter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButtonRouter, {
      props: {
        path: String
      },
      methods: {
        sendDataToParent() {
          this.$emit('sendDataToParent', data);
        }
      }
    });
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButtonRouter)).toBeTruthy();
  });
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
