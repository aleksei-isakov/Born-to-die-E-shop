import { shallowMount, createLocalVue } from '@vue/test-utils';
import EmptyCartPopup from '@/components/EmptyCartPopup/EmptyCartPopup';

describe('EmptyCartPopup.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(EmptyCartPopup, {
      localVue
    });

    expect(wrapper.find('base-text-border-button')).toBeTruthy();
    expect(wrapper.find('base-text-filled-button')).toBeTruthy();
    expect(wrapper.is(EmptyCartPopup)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
