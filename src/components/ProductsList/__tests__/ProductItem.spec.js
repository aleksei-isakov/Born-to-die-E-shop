import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductsList/ProductItem.vue';
import defaultImage from '@/assets/defaultImage.jpg';

describe('ProductItem', () => {
  it('should show price in the correct format - with 1 digit after point and a dollar sign', () => {
    const localThis = { price: 800.555 };

    expect(ProductItem.computed.getPrice.call(localThis)).toBe('800.6 $');
  });

  it('should show default image if does not get image in props', () => {
    const localThis = { image: null };

    expect(ProductItem.computed.getImage.call(localThis)).toBe(defaultImage);
  });

  it('shoult match snapshot', () => {
    const wrapper = shallowMount(ProductItem, {
      propsData: {
        id: '0',
        image: '',
        price: 10,
        created: '',
        updated: '',
        title: 'title',
        category: 'Category',
        rating: 0,
        isHorizontal: false
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
