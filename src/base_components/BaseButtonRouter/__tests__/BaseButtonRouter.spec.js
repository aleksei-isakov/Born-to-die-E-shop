import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseButtonRouter from '../BaseButtonRouter.vue';
import VueRouter from 'vue-router';

describe('BaseButtonRouter.vue', () => {
  let wrapper;
  const localVue = createLocalVue();

  localVue.use(VueRouter);
  const router = new VueRouter();

  beforeEach(() => {
    wrapper = shallowMount(BaseButtonRouter, {
      localVue,
      router,
      props: {
        path: '',
        to: ''
      }
    });

    expect(wrapper.is(BaseButtonRouter)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
