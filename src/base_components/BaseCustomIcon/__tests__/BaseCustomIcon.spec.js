import { createLocalVue, shallowMount } from '@vue/test-utils';
import BaseCustomIcon from '../BaseCustomIcon.vue';

describe('BaseCustomIcon.vue', () => {
  let wrapper;
  const icon = 'shopping_cart';
  const width = 55;
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = shallowMount(BaseCustomIcon, {
      localVue,
      propsData: {
        icon: icon,
        width: width
      }
    });
  };

  beforeAll(() => {
    renderWrapper();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
