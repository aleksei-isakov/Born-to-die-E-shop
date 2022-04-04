import { shallowMount } from '@vue/test-utils';
import MobileMenuButton from '../MobileMenuButton';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(MobileMenuButton, {
    data() {
      return {
        elementsNumber: 3
      };
    }
  });
  expect(wrapper.is(MobileMenuButton)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('MobileMenuButton', () => {
  it('should emit event after user clicked', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted().show).toBeTruthy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should match a snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
