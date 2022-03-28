import { mount } from '@vue/test-utils';
import ShownRating from '@/components/RatingIcon/ShownRating';

let wrapper;
const rating = 3;

beforeEach(() => {
  wrapper = mount(ShownRating, {
    propsData: {
      rating
    }
  });
});

describe('ShownRating', () => {
  it('is should render rating icon for user', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
