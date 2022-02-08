import { shallowMount, createLocalVue } from '@vue/test-utils';
import ButtonBorder from '../ButtonBorder.vue';

describe('ButtonBorder.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(ButtonBorder, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(ButtonBorder)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
