import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseTextBorderButton from '../BaseTextBorderButton.vue';

describe('BaseTextBorderButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(BaseTextBorderButton, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseTextBorderButton)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
