import { shallowMount, createLocalVue } from '@vue/test-utils';
import WishListPage from '../WishListPage.vue';

describe('WishListPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(WishListPage, {
      localVue
    });
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
