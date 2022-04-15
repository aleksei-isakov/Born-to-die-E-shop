import { mount, createLocalVue } from '@vue/test-utils';
import AddFeedbackForm from '@/components/FeedbackForm/AddFeedbackForm';
import Vuex from 'vuex';
import feedbacks from '@/components/Feedback/mocks.json';
import Vuetify from 'vuetify';
import Vue from 'vue';
import VueRouter from 'vue-router';

describe('AddFeedbackForm.vue', () => {
  let wrapper;
  let getters;
  let actions;
  let vuetify;
  let store;
  let router;
  const localVue = createLocalVue();

  Vue.use(Vuetify);
  localVue.use(VueRouter);
  localVue.use(Vuex);

  const mockProductInfo = {
    id: '6f40cf0f-9841-4994-ae04-2203145592a5',
    name: 'Fantastic Soft Sausages',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: 852,
    images: [
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480',
      'http://placeimg.com/640/480'
    ],
    createdAt: '2022-01-31T09:22:07.577Z',
    updatedAt: '',
    feedbacks: feedbacks['feedbacks']
  };

  beforeEach(() => {
    getters = {
      productInfo: () => {}
    };

    actions = {
      updateProductInfoWithNewFeedback: jest.fn(
        (getters.productInfo = () => mockProductInfo)
      ),
      addFeedbackIntoProductInfo: jest.fn(
        (getters.productInfo = () => mockProductInfo)
      )
    };

    vuetify = new Vuetify();
    router = new VueRouter();

    store = new Vuex.Store({
      modules: {
        PdpPageModule: {
          getters,
          actions
        }
      }
    });

    wrapper = mount(AddFeedbackForm, {
      localVue,
      vuetify,
      store,
      router,
      propsData: {
        isDialogActive: true
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render form for editing feedback correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should open filled feedback form', async () => {
    const reviewerName = wrapper.get('#feedback-v-text-field');
    const rating = wrapper.get('#rating-5');
    const comment = wrapper.get('#feedback-v-textarea');
    const openForm = async () => {
      await reviewerName.setValue('Lorem');
      await rating.setChecked();
      await comment.setValue('Lorem ipsum dolor sit amet, consectetur.');
    };

    await openForm();
    expect(reviewerName.element.value).toBe('Lorem');
    expect(rating.element.value).toBe('5');
    expect(comment.element.value).toBe(
      'Lorem ipsum dolor sit amet, consectetur.'
    );
  });
});
