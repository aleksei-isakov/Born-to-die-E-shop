import { createLocalVue, shallowMount } from '@vue/test-utils';
import BtdHeadInfo from '../HeadInfo.vue';
import { format } from 'date-fns';

describe('HeadInfo.vue', () => {
  let wrapper;
  const testName = 'name';
  const testDate = new Date('January 31, 2022, 00:00:00');
  const formatDate = format(testDate, 'DD.MM.YYYY');
  const testPrice = 0;
  const name = () => wrapper.find('.name');
  const date = () => wrapper.find('.date');
  const price = () => wrapper.find('.price');
  const localVue = createLocalVue();

  jest.mock('date-fns', () => ({ format: jest.fn() }));
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

  beforeAll(() => {
    renderWrapper();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should insert correct data', () => {
    expect(name().text()).toBe(testName);
    expect(date().text()).toBe(formatDate);
    expect(price().text()).toBe(testPrice.toString());
  });
});
