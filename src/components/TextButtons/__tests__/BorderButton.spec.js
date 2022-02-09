import { shallowMount, createLocalVue } from '@vue/test-utils';
import BorderButton from '../BorderButton.vue';

describe('BorderButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(BorderButton, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BorderButton)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
