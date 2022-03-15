import { shallowMount, createLocalVue } from '@vue/test-utils';
import EmptyCartButton from '../../EmptyCartButton/EmptyCartButton.vue';

describe('EmptyCartButton.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(EmptyCartButton, {
      localVue
    });

    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(EmptyCartButton)).toBeTruthy();
  });

  it('renders the button named "EMPTY CART"', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
