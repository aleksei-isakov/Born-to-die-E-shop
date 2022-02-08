import { shallowMount, createLocalVue } from '@vue/test-utils';
import ButtonPrimary from '../ButtonPrimary.vue';

describe('ButtonPrimary.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(ButtonPrimary, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(ButtonPrimary)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
