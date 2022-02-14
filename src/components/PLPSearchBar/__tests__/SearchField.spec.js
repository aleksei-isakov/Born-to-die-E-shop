import SearchField from '../SearchField.vue';
import { mount } from '@vue/test-utils';

describe('SearchField', () => {
  it('emits search event', () => {
    const inputValue = ' that is my input! ';
    const wrapper = mount(SearchField, {
      propsData: {
        placeHolder: 'input some value'
      },
      data() {
        return { inputValue: inputValue };
      }
    });

    wrapper.vm.onClickSearch();
    expect(wrapper.emitted().search).toEqual([[inputValue]]);
  });

  it('renders correctly', () => {
    const wrapper = mount(SearchField, {
      propsData: {
        placeHolder: 'input some value'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
