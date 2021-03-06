import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseButtonLink from '../BaseButtonLink.vue';

describe('BaseButtonLink.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(BaseButtonLink, {
      localVue,
      propsData: {
        href: ''
      }
    });

    wrapper.vm.onClickEmitEvent();
    expect(wrapper.find('a')).toBeTruthy();
    expect(wrapper.is(BaseButtonLink)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
