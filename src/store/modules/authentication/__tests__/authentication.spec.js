import actions from '../actions';
import * as types from '../mutationsTypes';
import axios from '@/api/setup.js';
import { BASE_URL } from '@/constants';

jest.mock('@/api/setup.js');

const responsePayload = {};
const loginData = {
  email: 'test@mail.com',
  password: 'qwerty'
};

describe('authenticate', () => {
  it('should authenticate a user', async () => {
    const commit = jest.fn();

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: responsePayload })
    );

    await actions.loginUser({ commit }, loginData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/login`, loginData);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.LOGIN_USER_SUCCESS,
      responsePayload
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

    expect(axios.post).toHaveBeenCalledTimes(2);
    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/login`, loginData);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_FAIL, error);
  });
});
