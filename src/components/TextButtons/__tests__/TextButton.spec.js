import { shallowMount, createLocalVue } from '@vue/test-utils';
import TextButton from '../TextButton.vue';

describe('TextButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(TextButton, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(TextButton)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
