import { mount } from '@vue/test-utils';
import EditableRating from '@/components/RatingIcon/EditableRating';

let wrapper;

beforeEach(() => {
  wrapper = mount(EditableRating);
});

describe('EditableRating', () => {
  it('is should render rating icon for user', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
