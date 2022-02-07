import { createLocalVue, shallowMount } from '@vue/test-utils';
import WelcomeTitle from '../WelcomeTitle.vue';

describe('WelcomeTitle.vue', () => {
  let wrapper;
  const title = 'title';
  const localVue = createLocalVue();
  const renderWrapper = () => {
    wrapper = shallowMount(WelcomeTitle, {
      localVue,
      propsData: {
        title: title
      }
    });
  };

  beforeAll(() => {
    renderWrapper();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
