import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import AddAddressPopup from '@/components/AddAddressPopup/AddAddressPopup';
import Vuetify from 'vuetify';
Vue.directive('mask', {});

let wrapper;
const userdata = {
  title: 'Mr',
  name: 'Arkadiy',
  surname: 'Dobkin',
  phoneNumberCode: '+44',
  phoneNumber: '(999)6659986',
  country: 'Russia',
  city: 'Moscow',
  street: 'Street',
  building: '1',
  flat: '1',
  zip: '55555-5555'
};
const isPopupVisible = true;

Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('AddAddressPopup', () => {
  afterEach(() => {
    wrapper.destroy();
  });

  it('submit button should be disabled if form fields are empty', async () => {
    const localVue = createLocalVue();

    wrapper = mount(AddAddressPopup, {
      localVue,
      vuetify,
      propsData: {
        isPopupVisible: isPopupVisible
      },
      data() {
        return {
          userdata: {
            title: '',
            name: '',
            surname: '',
            phoneNumberCode: '',
            phoneNumber: '',
            country: '',
            city: '',
            street: '',
            building: '',
            flat: '',
            zip: ''
          }
        };
      }
    });

    await Vue.nextTick();

    expect(wrapper.vm.$data.valid).toBeFalsy();
    expect(wrapper.find('.form_wrapper__submit-button').exists()).toBeTruthy();
    expect(
      wrapper.find('.form_wrapper__submit-button').element.disabled
    ).toBeTruthy();
  });

  it('submit button should be active if all fields are filled out properly', async () => {
    const localVue = createLocalVue();

    wrapper = mount(AddAddressPopup, {
      localVue,
      vuetify,
      propsData: {
        isPopupVisible: isPopupVisible
      },
      data() {
        return {
          userdata
        };
      }
    });

    await Vue.nextTick();

    expect(wrapper.vm.$data.valid).toBeTruthy();
    expect(wrapper.find('.form_wrapper__submit-button').exists()).toBeTruthy();
    expect(
      wrapper.find('.form_wrapper__submit-button').element.disabled
    ).toBeFalsy();
  });

  it('should render correctly and match the snapshot', () => {
    const localVue = createLocalVue();

    wrapper = mount(AddAddressPopup, {
      localVue,
      vuetify,
      propsData: {
        isPopupVisible: isPopupVisible
      },
      data() {
        return {
          userdata: {
            title: '',
            name: '',
            surname: '',
            phoneNumberCode: '',
            phoneNumber: '',
            country: '',
            city: '',
            street: '',
            building: '',
            flat: '',
            zip: ''
          }
        };
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
