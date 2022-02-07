import { createLocalVue, shallowMount } from '@vue/test-utils';
import CustomIcon from '../CustomIcon.vue';

describe('CustomIcon.vue', () => {
  let wrapper;
  const icon = 'shopping_cart';
  const width = 55;
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = shallowMount(CustomIcon, {
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
