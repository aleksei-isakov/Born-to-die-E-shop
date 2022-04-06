import actions from '../actions';
import mutationTypes from '../mutationTypes';
import axios from '@/api/setup.js';

const currentUserId = '123';
const emptyProductList = [];
const productList = [
  {
    id: '123',
    quantity: 3
  },
  {
    id: '456',
    quantity: 5
  }
];
const userCartWithData = {
  id: currentUserId,
  products: productList
};
const emptyUserCart = {
  id: currentUserId,
  products: emptyProductList
};
const emptyCommonCartOnServer = [];
const commonCartOnServerWithNeededUser = [userCartWithData];

jest.mock('@/api/setup.js');

describe('shoppingcart module', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a cart on the server with the cart data from the state', async () => {
    const state = {
      productsInCart: emptyProductList
    };
    const commit = jest.fn();

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: emptyUserCart })
    );

    await actions.createCart({ state, commit }, currentUserId);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/cart', emptyUserCart);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_LOADING);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_SUCCESS);
  });

  it('should not update the cart on server if user is not logged in', async () => {
    const state = {
      productsInCart: productList
    };
    const commit = jest.fn();

    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: userCartWithData })
    );

    await actions.updateCart({ state, commit });

    expect(axios.put).toHaveBeenCalledTimes(0);
  });

  it('should update the cart on the server if user is logged in', async () => {
    const state = {
      productsInCart: productList
    };
    const commit = jest.fn();

    localStorage.setItem('currentUserId', currentUserId);

    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: userCartWithData })
    );

    await actions.updateCart({ state, commit });

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      `/cart/${currentUserId}`,
      userCartWithData
    );
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_LOADING);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_SUCCESS);
  });

  it('should try to find a user cart on the server and if it is found, then update it', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn(() => Promise.resolve('createCart'));

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: commonCartOnServerWithNeededUser })
    );

    await actions.getCart({ commit, dispatch }, currentUserId);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/cart');
    expect(commit).toHaveBeenCalledTimes(3);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_LOADING);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_SUCCESS);
    expect(commit).toHaveBeenCalledWith(
      mutationTypes.FIND_USER_CART_SUCCESS,
      productList
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith('updateCart');
  });

  it('should try to find a user cart on the server and if it cannot be found, then create a cart', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn(() => Promise.resolve('createCart'));

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: emptyCommonCartOnServer })
    );

    await actions.getCart({ commit, dispatch }, currentUserId);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/cart');
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_LOADING);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_SUCCESS);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith('createCart', currentUserId);
  });

  it('action getCart should catch an error', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn(() => Promise.resolve('createCart'));

    axios.get.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          status: 404
        }
      })
    );

    await actions.getCart({ commit, dispatch }, currentUserId);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/cart');
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_LOADING);
    expect(commit).toHaveBeenCalledWith(mutationTypes.REQUEST_CART_FAIL);
  });
});
