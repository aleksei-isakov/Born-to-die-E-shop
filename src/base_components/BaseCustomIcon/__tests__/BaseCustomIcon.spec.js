import { mount, createLocalVue } from '@vue/test-utils';
import BaseCustomIcon from '../BaseCustomIcon';

let wrapper;
let localVue = createLocalVue();
let icon = 'shopping_cart';

describe('BaseCustomIcon', () => {
  test('is a Vue instance', () => {
    wrapper = mount(BaseCustomIcon, {
      localVue,
      propsData: { icon }
    });
    expect(wrapper.find('img')).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
