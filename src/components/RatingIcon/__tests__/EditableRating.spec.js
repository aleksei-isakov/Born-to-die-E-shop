import { mount } from '@vue/test-utils';
import EditableRating from '@/components/RatingIcon/EditableRating';

let wrapper;
const rating = 0;

beforeEach(() => {
  wrapper = mount(EditableRating, {
    propsData: {
      rating
    }
  });
});

describe('EditableRating', () => {
  const clickedStar = 3;

  it('event should be emitted by choosing one of the stars and should pass star number', () => {
    const starWrapper = wrapper.find(
      `.stars-wrapper:nth-child(${clickedStar})`
    );
    const checkbox = starWrapper.find('.rating__input');

    checkbox.trigger('input');
    expect(wrapper.emitted('change-rating')).toBeTruthy();
    expect(wrapper.emitted('change-rating')[0]).toEqual([clickedStar]);
  });

  it('is should render rating icon for user', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
