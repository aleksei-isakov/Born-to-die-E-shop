import { mount } from '@vue/test-utils';
import AddressBookCard from '../AddressBookCard.vue';

describe('AddressBookCard', () => {
  let wrapper = mount(AddressBookCard, {});

  it('should render edit button', () => {
    expect(wrapper.find('.address-card__button').exists()).toBe(true);
  });

  it('should render AddressBookCard', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('choose "Mr." or "Mrs."', () => {
    const wrapper = mount(AddressBookCard, {
      data() {
        return {
          mockInfo: [
            { gender: 'female', firstName: 'Anna', lastName: 'Ivanova' }
          ]
        };
      }
    });

    expect(wrapper.vm.getName).toBe('Mrs. Anna Ivanova');
  });
});
