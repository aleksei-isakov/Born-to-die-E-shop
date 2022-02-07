import ProductDescription from '@/components/ProductsList/ProductDescription.vue';

describe('ProductDescription', () => {
  it('formats date', () => {
    expect(ProductDescription.methods.formatDate(new Date(1))).toBe('1.1.1970');
  });
});
