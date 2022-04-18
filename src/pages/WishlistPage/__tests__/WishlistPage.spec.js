import { shallowMount, createLocalVue } from '@vue/test-utils';
import WishLlstPage from '../WishlistPage.vue';

describe('WishlistPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(WishLlstPage, {
      localVue
    });
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
