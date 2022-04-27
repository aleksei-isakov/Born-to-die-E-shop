import { createLocalVue, shallowMount } from '@vue/test-utils';
import formatCurrency from '@/utils/formatCurrency';
import BtdHeadInfo from '../HeadInfo.vue';

describe('HeadInfo.vue', () => {
  let wrapper;
  const testName = 'name';
  const testDate = 'January 31, 2022, 00:00:00';
  const testPrice = 130;
  const name = () => wrapper.find('.head-info__name');
  const date = () => wrapper.find('.head-info__date');
  const price = () => wrapper.find('.head-info__price');
  const localVue = createLocalVue();

  localVue.filter('currency', formatCurrency);

  const renderWrapper = () => {
    wrapper = shallowMount(BtdHeadInfo, {
      localVue,
      propsData: {
        name: testName,
        date: testDate,
        price: testPrice,
        priceWithDiscount: 130,
        discountPercentage: 0
      }
    });
  };

  beforeAll(() => {
    renderWrapper();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('computed property "getDate" should return date in the format "DD.MM.YYYY"', () => {
    expect(wrapper.vm.getDate).toBe('31.01.2022');
  });

  it('should display: name; date in the format "DD.MM.YYYY"', () => {
    expect(name().text()).toBe(testName);
    expect(date().text()).toBe(`date: ${wrapper.vm.getDate}`);
  });
});
