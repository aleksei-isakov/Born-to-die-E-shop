import { ADDITIONAL_CATEGORY_NAME } from '@/constants';

const state = {
  products: [],
  isLoading: false,
  productsQuantity: 0,
  errorCode: null,
  categories: [],
  isLoadingCategories: false,
  isErrorCategories: false,
  currentCategory: ADDITIONAL_CATEGORY_NAME,
  numberOfPage: null
};

export default state;
