import { mount } from '@vue/test-utils';
import PdpPage from '@/pages/PdpPage/PdpPage';

let wrapper;

beforeEach(() => {
  wrapper = mount(PdpPage);
});

afterEach(() => {
  wrapper.destroy();
});

describe('PdpPage', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
