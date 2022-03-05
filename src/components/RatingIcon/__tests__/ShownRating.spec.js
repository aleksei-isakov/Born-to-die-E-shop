import { mount } from '@vue/test-utils';
import ShownRating from '@/components/RatingIcon/ShownRating';

let wrapper;

beforeEach(() => {
  wrapper = mount(ShownRating);
});

describe('ShownRating', () => {
  it('is should render rating icon for user', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
