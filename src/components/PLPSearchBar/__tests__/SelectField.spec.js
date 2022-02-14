import SelectField from '../SelectField.vue';
import { mount } from '@vue/test-utils';

describe('SelectField', () => {
  it('emits category change event', () => {
    const wrapper = mount(SelectField, {
      propsData: {
        categories: ['a', 'b', 'c']
      }
    });
    const categoryIndex = 1;

    wrapper.vm.onClickChange(categoryIndex);

    console.log(wrapper.emitted());
    expect(wrapper.emitted()['category-change']).toEqual([['b']]);
  });
});

describe('SelectField', () => {
  it('renders correctly', () => {
    const wrapper = mount(SelectField, {
      propsData: {
        categories: ['a', 'b', 'c']
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
