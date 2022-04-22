import { shallowMount, createLocalVue } from '@vue/test-utils';
import FeedbackList from '@/components/Feedback/FeedbackList';
import FeedbackItem from '@/components/Feedback/FeedbackItem';
import { mockFeedbackList, mockCurrentUserInfo } from '@/mocks';
import AuthenticationModule from '@/store/modules/authentication';
import Vuex from 'vuex';

let wrapper;
let state;
let store;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

const sortedMockFeedbackList = mockFeedbackList.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

beforeEach(() => {
  state = {
    currentUserInfo: mockCurrentUserInfo
  };

  getters = {
    currentUserInfo: (state) => state.mockCurrentUserInfo,
    isAdmin: AuthenticationModule.getters.isAdmin
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
      feedbacks: sortedMockFeedbackList
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
