import { shallowMount } from '@vue/test-utils';
import Introduction from '../Introduction.vue';

describe('Introduction.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Introduction, {
      propsData: { msg }
    });

    expect(wrapper.text()).toMatch(msg);
  });

  it('renders a valid snapshot', () => {
    const wrapper = shallowMount(Introduction, {
      propsData: { msg: 'some message' }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
