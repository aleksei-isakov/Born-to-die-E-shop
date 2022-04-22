import { shallowMount } from '@vue/test-utils';
import NotFoundPage from '../NotFoundPage';

describe('NotFoundPage', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(NotFoundPage);

    expect(wrapper).toMatchSnapshot();
  });
});
