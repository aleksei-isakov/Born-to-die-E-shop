import { createLocalVue, shallowMount } from '@vue/test-utils';
import BtdHeadInfo from '../HeadInfo.vue';

describe('HeadInfo.vue', () => {
  let wrapper;
  const testName = 'name';
  const testDate = '00.00.0000';
  const testPrice = '0';
  const name = () => wrapper.find('.name');
  const date = () => wrapper.find('.date');
  const price = () => wrapper.find('.price');
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = shallowMount(BtdHeadInfo, {
      localVue,
      propsData: {
        name: testName,
        date: testDate,
        price: testPrice
      }
    });
  };

  beforeEach(() => {
    renderWrapper();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should insert correct data', () => {
    expect(name().text()).toBe(testName);
    expect(date().text()).toBe(testDate);
    expect(price().text()).toBe(testPrice);
  });
});
