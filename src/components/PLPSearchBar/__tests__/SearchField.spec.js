import SearchField from '../SearchField.vue';
import { mount } from '@vue/test-utils';

let wrapper;
const inputValue = 'that is my input!';

beforeEach(() => {
  wrapper = mount(SearchField, {
    propsData: {
      placeHolder: 'input some value'
    },

    data() {
      return { inputValue: inputValue };
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('SearchField', () => {
  it('should emit search event', () => {
    wrapper.vm.onClickSearch();
    expect(wrapper.emitted().search).toEqual([[inputValue]]);
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
