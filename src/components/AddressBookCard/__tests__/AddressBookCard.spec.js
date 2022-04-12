import { mount } from '@vue/test-utils';
import AddressBookCard from '../AddressBookCard.vue';
import mockInfo from '../addressBookCardMock.json';

describe('AddressBookCard', () => {
  const wrapper = mount(AddressBookCard, {
    propsData: {
      name: mockInfo[0].firstName,
      address: mockInfo[0].city,
      phone: mockInfo[0].phone,
      zipcode: mockInfo[0].zipCode
    }
  });

  it('should render edit button', () => {
    expect(wrapper.find('.address-card__button').exists()).toBe(true);
  });

  it('should render AddressBookCard', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
