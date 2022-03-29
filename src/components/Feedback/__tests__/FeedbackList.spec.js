import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackList from '@/components/Feedback/FeedbackList';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import data from '@/components/Feedback/mocks.json';

describe('FeedbackList.vue', () => {
  let wrapper;
  const date = () => wrapper.find('.feedback-item__date');

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(FeedbackList, {
      localVue,
      stubs: {
        FeedbackItem: FeedbackItem
      },
      propsData: {
        feedbacks: data['feedbacks']
      }
    });
  });

  it('should render all feedbacks correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render newest feedbacks first', () => {
    expect(date().text()).toBe('(22.03.2022)');
  });
});
