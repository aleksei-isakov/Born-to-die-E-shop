import SelectField from '../SelectField.vue';
import { mount } from '@vue/test-utils';

let wrapper;

beforeEach(() => {
  wrapper = mount(SelectField, {
    propsData: {
      categories: ['a', 'b', 'c']
    },

    data() {
      return {
        isDropdownOpen: false
      };
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SelectField', () => {
  it('should change visibility of dropdown by click', () => {
    const button = wrapper.find('.select-field');

    button.trigger('click');
    expect(wrapper.vm.isDropdownOpen).toBe(true);
    button.trigger('click');
    expect(wrapper.vm.isDropdownOpen).toBe(false);
  });

  it('should render correctly and match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
