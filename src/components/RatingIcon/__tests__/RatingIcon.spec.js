import { mount } from '@vue/test-utils';
import RatingIcon from '@/components/RatingIcon/RatingIcon';

let wrapper;
const isForm = false;
const max = 5;
const rating = 3;

beforeEach(() => {
  wrapper = mount(RatingIcon, {
    propsData: {
      isForm: isForm,
      max: max,
      rating: rating
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('RatingIcon', () => {
  it('should return correct props', () => {
    expect(wrapper.props().isForm).toBe(isForm);
    expect(wrapper.props().max).toBe(max);
    expect(wrapper.props().rating).toBe(rating);
  });
  it('rating for form is not displayed initially', () => {
    expect(wrapper.find('.star-rating--form').exists()).toBe(false);
  });
  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
