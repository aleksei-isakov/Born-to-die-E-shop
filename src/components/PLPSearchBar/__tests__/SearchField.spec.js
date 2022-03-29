import SearchField from '../SearchField.vue';
import { mount } from '@vue/test-utils';

let wrapper;
const inputValue = ' that is my input! ';
const inputValueWithoutSpaces = 'that is my input!';

beforeEach(() => {
  wrapper = mount(SearchField, {
    propsData: {
      placeHolder: inputValue
    },

    data() {
      return { inputValue };
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('SearchField', () => {
  it('should emit search event with trimmed input value', () => {
    wrapper.vm.onClickSearch();
    expect(wrapper.emitted().search).toEqual([[inputValueWithoutSpaces]]);
  });

  it('should render correctly and match valid snapshot', () => {
    const wrapper = mount(SearchField, {
      propsData: {
        placeHolder: 'input some value'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
