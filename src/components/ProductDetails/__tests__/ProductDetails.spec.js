import { createLocalVue, shallowMount } from '@vue/test-utils';
import ProductDetails from '../ProductDetails.vue';

describe('ProductDetails.vue', () => {
  let wrapper;
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = shallowMount(ProductDetails, {
      localVue,
      propsData: {
        description: description
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
