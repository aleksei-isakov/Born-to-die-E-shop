import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseButton from '../BaseButton.vue';

describe('BaseButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(BaseButton, {
      localVue
    });

    wrapper.vm.onClickEmit();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButton)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
