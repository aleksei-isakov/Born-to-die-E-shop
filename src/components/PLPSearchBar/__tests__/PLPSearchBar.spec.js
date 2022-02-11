import { mount } from '@vue/test-utils';
import PLPSearchBar from '../PLPSearchBar.vue';

describe('PLPSearchBar', () => {
  it('emits search event', () => {
    const wrapper = mount(PLPSearchBar);
    const inputValue = 'my input';

    wrapper.vm.onSearch(inputValue);
    expect(wrapper.emitted().search).toEqual([['my input']]);
  });
});

describe('PLPSearchBar', () => {
  it('renders correctly', () => {
    const wrapper = mount(PLPSearchBar);

    expect(wrapper.element).toMatchSnapshot();
  });
});
