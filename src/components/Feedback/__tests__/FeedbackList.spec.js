import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackList from '@/components/Feedback/FeedbackList';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import mockCurrentUserInfo from '@/components/Slider/AddToCartBlock/mockCurrentUserInfo';
import Vuex from 'vuex';

let wrapper;
let state;
let store;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    currentUserInfo: () => mockCurrentUserInfo
  };

  store = new Vuex.Store({
    modules: {
      AuthenticationModule: {
        namespaced: true,
        state,
        getters
      }
    }
  });

  wrapper = shallowMount(FeedbackList, {
    localVue,
    store,
    stubs: {
      FeedbackItem: FeedbackItem
    },
    propsData: {
      feedbacks: [
        {
          reviewerName: 'Vitali',
          date: 'March 5, 2017 10:00:00',
          rating: 2,
          comment: 'Lorem ipsum'
        },
        {
          reviewerName: 'Damian',
          date: 'March 22, 2022 10:00:00',
          rating: 4,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        }
      ]
    }
  });
});
describe('FeedbackList.vue', () => {
  const date = () => wrapper.find('.feedback-item__date');

  it('should render all feedbacks correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render newest feedbacks first', () => {
    expect(date().text()).toBe('(22.03.2022)');
  });
});
