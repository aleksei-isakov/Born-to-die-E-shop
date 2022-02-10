import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseTextFilledButton from '../BaseTextFilledButton.vue';

describe('BaseTextFilledButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(BaseTextFilledButton, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseTextFilledButton)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
