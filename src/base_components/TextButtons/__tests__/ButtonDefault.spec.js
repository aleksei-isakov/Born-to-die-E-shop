import { shallowMount, createLocalVue } from '@vue/test-utils';
import ButtonDefault from '../ButtonDefault.vue';

describe('ButtonDefault.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(ButtonDefault, {
      localVue
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(ButtonDefault)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
