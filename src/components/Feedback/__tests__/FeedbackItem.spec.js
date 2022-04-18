import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import { mockFeedbackList } from '@/mocks';

const { id, reviewerName, date, rating, comment, reviewerId } =
  mockFeedbackList[1];

describe('FeedbackItem.vue', () => {
  let wrapper;
  let localVue = createLocalVue();

  wrapper = shallowMount(FeedbackItem, {
    localVue,
    propsData: {
      reviewerName,
      date,
      rating,
      comment,
      reviewerId,
      feedbackId: id,
      isDeleteButtonVisible: true,
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
        reviewerName,
        date,
        rating,
        comment,
        reviewerId,
        feedbackId: id,
        isDeleteButtonVisible: false,
        isEditButtonVisible: false
      }
    });
  });

  it('should render feedback correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should not contain delete button if prop isDeleteButtonVisible is false', () => {
    expect(wrapper.find('.feedback-item__delete-btn').exists()).toBeFalsy();
  });

  it('computed property "getFormatedDate" should return date in the format "DD.MM.YYYY"', () => {
    expect(wrapper.vm.getFormatedDate).toBe('22.03.2022');
  });

  it('should not render edit button if user wrote the feedback', () => {
    expect(wrapper.vm.isEditButtonVisible).toBe(false);
    expect(wrapper.find('.feedback-item__edit-btn').exists()).toBe(false);
  });

  it('should contain delete button if prop isDeleteButtonVisible is true', async () => {
    await wrapper.setProps({ isDeleteButtonVisible: true });
    expect(wrapper.find('.feedback-item__delete-btn').exists()).toBeTruthy();
  });
});
