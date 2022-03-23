import SelectFieldItem from '../SelectFieldItem.vue';
import { mount } from '@vue/test-utils';

describe('SelectFieldItem', () => {
  it('should render correctly and match snapshot', () => {
    const wrapper = mount(SelectFieldItem, {
      propsData: {
        category: 'Example of a category',
        index: 0
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
