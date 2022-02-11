import { shallowMount } from '@vue/test-utils';
import CustomFilter from '../CustomFilter.vue';

let wrapper;
const testSelectedIconPath = 'menu_filter_column';

beforeEach(() => {
  wrapper = shallowMount(CustomFilter, {
    propsData: {
      selectedIconPath: testSelectedIconPath
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('FilterComponent', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should return correct props', () => {
    expect(wrapper.props().selectedIconPath).toBe(testSelectedIconPath);
  });

  test('should open/close custom select and show/hide the options', async () => {
    const selectField = wrapper.find('.custom-select__selected');

    expect(wrapper.contains('.custom-select__selected')).toBe(true);

    await selectField.trigger('click');
    expect(wrapper.contains('.custom-select__options')).toBe(true);

    await selectField.trigger('click');
    expect(wrapper.contains('.custom-select__options')).toBe(false);
  });

  test('filter items should be clickable ', async () => {
    const filterItem = wrapper.findAll('.filter-block__item');

    await filterItem.trigger('click');
    expect(wrapper.findAll('.filter-block__item').length).toBe(2);
  });

  test('first filter element should have active class but second shoud not have', () => {
    const filterItem = wrapper.findAll('.filter-block__item');

    expect(filterItem.at(0).findAll('.active').length).toBe(1);
    expect(filterItem.at(1).findAll('.active').length).toBe(0);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
