import { mount, createLocalVue } from '@vue/test-utils';
import ShoppingCartIcon from '@/components/ShoppingCartIcon/ShoppingCartIcon';

const localVue = createLocalVue();
let wrapper;

describe('ShoppingCartIcon', () => {
  it('should import BaseCustomIcon', () => {
    wrapper = mount(ShoppingCartIcon, {
      localVue
    });
    expect(wrapper.find('BaseCustomIcon')).toBeTruthy();
  });
  it('should be a VueInstance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
