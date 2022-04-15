import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import data from '@/components/Feedback/mocks.json';

describe('FeedbackItem.vue', () => {
  let wrapper;
  let localVue = createLocalVue();

  wrapper = shallowMount(FeedbackItem, {
    localVue,
    propsData: {
      reviewerName: data['feedbacks'][1].reviewerName,
      date: data['feedbacks'][1].date,
      rating: data['feedbacks'][1].rating,
      comment: data['feedbacks'][1].comment,
      reviewerId: data['feedbacks'][1].reviewerId,
      feedbackId: data['feedbacks'][1].id,
      isEditButtonVisible: true
    }
  });

  it('should render feedback correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('computed property "getFormatedDate" should return date in the format "DD.MM.YYYY"', () => {
    expect(wrapper.vm.getFormatedDate).toBe('22.03.2022');
  });

  it('should render edit button if user wrote the feedback', () => {
    expect(wrapper.vm.isEditButtonVisible).toBe(true);
    expect(wrapper.find('.feedback-item__edit-btn').exists()).toBe(true);
  });
});

describe('FeedbackItem.vue', () => {
  let wrapper;
  let localVue = createLocalVue();

  beforeEach(() => {
    wrapper = shallowMount(FeedbackItem, {
      localVue,
      propsData: {
        reviewerName: data['feedbacks'][1].reviewerName,
        date: data['feedbacks'][1].date,
        rating: data['feedbacks'][1].rating,
        comment: data['feedbacks'][1].comment,
        reviewerId: data['feedbacks'][1].reviewerId,
        feedbackId: data['feedbacks'][1].id,
        isEditButtonVisible: false
      }
    });
  });

  it('should not render edit button if user wrote the feedback', () => {
    expect(wrapper.vm.isEditButtonVisible).toBe(false);
    expect(wrapper.find('.feedback-item__edit-btn').exists()).toBe(false);
  });
});
