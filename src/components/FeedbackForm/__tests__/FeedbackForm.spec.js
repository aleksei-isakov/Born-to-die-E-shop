import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';
import Vuetify from 'vuetify';

let wrapper;
const reviewerName = 'Lorem';
const comment = 'Lorem ipsum dolor sit amet, consectetur.';
const rating = 3;
const isDialogActive = true;

Vue.use(Vuetify);
const vuetify = new Vuetify();

document.body.setAttribute('data-app', 'true');

describe('FeedbackForm.vue', () => {
  afterEach(() => {
    wrapper.destroy();
  });

  it('submit button should be disabled if rating is set but text fields are empty', async () => {
    const localVue = createLocalVue();

    wrapper = mount(FeedbackForm, {
      localVue,
      vuetify,
      propsData: {
        isDialogActive: isDialogActive
      },
      data() {
        return {
          form: {
            rating
          }
        };
      }
    });

    await Vue.nextTick();

    expect(wrapper.vm.$data.isTextValid).toBeFalsy();
    expect(wrapper.find('.feedback__btn').exists()).toBeTruthy();
    expect(wrapper.find('.feedback__btn').element.disabled).toBeTruthy();
  });

  it('submit button should be disabled if text fields have data but rating is unset', async () => {
    const localVue = createLocalVue();

    wrapper = mount(FeedbackForm, {
      localVue,
      vuetify,
      propsData: {
        isDialogActive: isDialogActive
      },
      data() {
        return {
          form: {
            reviewerName,
            comment
          }
        };
      }
    });

    await Vue.nextTick();

    expect(wrapper.vm.isTextValid).toBeTruthy();
    expect(wrapper.find('.feedback__btn').element.disabled).toBeTruthy();
  });

  it('submit button should not be disabled if all fields have data', async () => {
    const localVue = createLocalVue();

    wrapper = mount(FeedbackForm, {
      localVue,
      vuetify,
      propsData: {
        isDialogActive: isDialogActive
      },
      data() {
        return {
          form: {
            reviewerName,
            comment,
            rating
          }
        };
      }
    });

    await Vue.nextTick();

    expect(wrapper.vm.isTextValid).toBeTruthy();
    expect(wrapper.find('.feedback__btn').element.disabled).toBeFalsy();
  });
});
