import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';

import Vuetify from 'vuetify';

let wrapper;
let vuetify;
const reviewerName = '';
const comment = '';
const reviewerNameWithData = 'Lorem';
const commentWithData = 'Lorem ipsum dolor sit amet, consectetur.';
const isDialogActive = true;

beforeEach(() => {
  const localVue = createLocalVue();

  Vue.use(Vuetify);
  vuetify = new Vuetify();

  document.body.setAttribute('data-app', 'true');

  wrapper = mount(FeedbackForm, {
    localVue,
    vuetify,
    propsData: {
      isDialogActive: isDialogActive
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('FeedbackForm.vue', () => {
  it('should check submit button is disabled if fields are empty', async () => {
    await wrapper.find('#feedback-v-text-field').setValue(reviewerName);
    await wrapper.find('#feedback-v-textarea').setValue(comment);
    await wrapper.vm.$forceUpdate();

    expect(wrapper.vm.form.reviewerName).toBe(reviewerName);
    expect(wrapper.vm.form.comment).toBe(comment);

    expect(wrapper.vm.$data.isValid).toBeFalsy();
    expect(wrapper.find('.feedback__btn').exists()).toBeTruthy();
    expect(wrapper.find('.feedback__btn').element.disabled).toBeTruthy();
  });

  it('should check submit button is not disabled if fields have data', async () => {
    await wrapper.find('#feedback-v-text-field').setValue(reviewerNameWithData);
    await wrapper.find('#feedback-v-textarea').setValue(commentWithData);
    await wrapper.vm.$forceUpdate();

    expect(wrapper.vm.form.reviewerName).toBe(reviewerNameWithData);
    expect(wrapper.vm.form.comment).toBe(commentWithData);

    expect(wrapper.vm.isValid).toBeTruthy();
    expect(wrapper.find('.feedback__btn').element.disabled).toBeFalsy();
  });
});
