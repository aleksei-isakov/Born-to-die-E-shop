import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import data from '@/components/Feedback/mocks.json';

describe('FeedbackItem.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(FeedbackItem, {
      localVue,
      propsData: {
        reviewerName: data['feedbacks'][1].reviewerName,
        date: data['feedbacks'][1].date,
        rating: data['feedbacks'][1].rating,
        comment: data['feedbacks'][1].comment
      }
    });
  });

  it('should render feedback correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('computed property "getDate" should return date in the format "DD.MM.YYYY"', () => {
    expect(wrapper.vm.getFormatDate).toBe('22.03.2022');
  });
});
