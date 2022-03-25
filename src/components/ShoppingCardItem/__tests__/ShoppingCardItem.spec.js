import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import ShoppingCardItem from '@/components/ShoppingCardItem/ShoppingCardItem';
import defaultImage from '@/assets/defaultImage.jpg';
Vue.use(Vuetify);

describe('ShoppingCardItem', () => {
  let wrapper;
  const name = 'name';
  const price = 35;
  const quantity = 1;
  const id = '0';
  let vuetify = new Vuetify();
  const imageList = [
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480'
  ];

  beforeEach(() => {
    wrapper = mount(ShoppingCardItem, {
      vuetify,
      propsData: {
        images: imageList,
        id: id,
        name: name,
        quantity: quantity,
        price: price
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should return correct props', () => {
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.props().price).toBe(price);
    expect(wrapper.props().quantity).toBe(quantity);
    expect(wrapper.props().images).toBe(imageList);
    expect(wrapper.props().id).toBe(id);
  });

  test('Should take the first image if images array is not empty', () => {
    const localThis = { images: imageList };

    expect(ShoppingCardItem.computed.getImage.call(localThis)).toBe(
      imageList[0]
    );
  });

  test('Should get default image when no images in the props', () => {
    const localThis = { images: null };

    expect(ShoppingCardItem.computed.getImage.call(localThis)).toBe(
      defaultImage
    );
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
