import ProductItem from '@/components/ProductsList/ProductItem.vue';
import defaultImage from '@/assets/defaultImage.jpg';

describe('ProductItem', () => {
  it('formats price', () => {
    const localThis = { price: 800.555 };

    expect(ProductItem.computed.getPrice.call(localThis)).toBe('800.6');
  });

  it('gets image', () => {
    const localThis = { image: null };

    expect(ProductItem.computed.getImage.call(localThis)).toBe(defaultImage);
  });
});
