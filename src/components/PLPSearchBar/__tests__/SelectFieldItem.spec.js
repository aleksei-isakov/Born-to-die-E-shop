import SelectFieldItem from '../SelectFieldItem.vue';
import { mount } from '@vue/test-utils';

let wrapper;

beforeEach(() => {
  wrapper = mount(SelectFieldItem, {
    props: {
      category: 'Example of a category',
      index: 0
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('SelectFieldItem', () => {
  it('should emit chooseItem event', () => {
    wrapper.vm.onClickChooseItem();
    expect(wrapper.emitted().chooseItem).toBeTruthy();
  });
  it('should render correctly and match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
