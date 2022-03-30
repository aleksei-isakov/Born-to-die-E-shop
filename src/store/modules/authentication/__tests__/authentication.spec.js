import actions from '../actions';
import * as types from '../mutationsTypes';
import axios from '@/api/setup.js';

jest.mock('@/api/setup.js');

const accessToken = 'token';
const userId = '123';
const responsePayload = {
  accessToken,
  user: {
    id: userId
  }
};
const loginData = {
  email: 'test@mail.com',
  password: 'qwerty'
};
const getCartActionName = 'ShoppingCartModule/getCart';
let localStore;

describe('authenticate module', () => {
  beforeEach(() => {
    localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
  });

  afterEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
  });

  it('should authenticate a user, add user info to localStorage and call the action that get his cart', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: responsePayload })
    );

    await actions.loginUser({ commit, dispatch }, loginData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/login', loginData);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.LOGIN_USER_SUCCESS,
      responsePayload
    );
    expect(dispatch).toHaveBeenCalledWith(
      getCartActionName,
      responsePayload.user.id,
      { root: true }
    );
    expect(window.localStorage.getItem('accessToken')).toBe(
      responsePayload.accessToken
    );
    expect(window.localStorage.getItem('currentUserId')).toBe(
      responsePayload.user.id
    );
  });

  it('should catch an error', async () => {
    const commit = jest.fn();
    const error = 'Bad request';

    axios.post.mockImplementationOnce(() =>
      Promise.reject({
        status: 400,
        message: 'Bad request'
      })
    );

    await actions.loginUser({ commit }, loginData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/login', loginData);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_FAIL, error);
  });

  it('should register a user, add user info to localStorage and call the action that get his cart', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: responsePayload })
    );

    await actions.registerUser({ commit, dispatch }, loginData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('/register', loginData);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.REGISTER_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.REGISTER_USER_SUCCESS,
      responsePayload
    );
    expect(dispatch).toHaveBeenCalledWith(getCartActionName, userId, {
      root: true
    });
    expect(window.localStorage.getItem('accessToken')).toBe(accessToken);
    expect(window.localStorage.getItem('currentUserId')).toBe(userId);
  });

  it('should get user info if localStorage has accessToken and currentUserId', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('currentUserId', userId);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: responsePayload.user })
    );

    await actions.getUserInfo({ commit, dispatch });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`/users/${userId}`);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.SET_USER_INFO_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.SET_USER_INFO_SUCCESS,
      responsePayload
    );
    expect(dispatch).toHaveBeenCalledWith(getCartActionName, userId, {
      root: true
    });
    expect(window.localStorage.getItem('accessToken')).toBe(accessToken);
    expect(window.localStorage.getItem('currentUserId')).toBe(userId);
  });

  it('should not get user info if localStorage does not have accessToken and currentUserId', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    await actions.getUserInfo({ commit, dispatch });

    expect(axios.get).toHaveBeenCalledTimes(0);
  });

  it('should clear currentUserInfo', async () => {
    const commit = jest.fn();

    actions.clearCurrentUser({ commit });

    expect(window.localStorage.getItem('accessToken')).toBe(null);
    expect(window.localStorage.getItem('currentUserId')).toBe(null);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith(types.CLEAR_CURRENT_USER);
  });
});
