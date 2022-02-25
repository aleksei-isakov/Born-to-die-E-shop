import actions from '../actions';
import * as types from '../mutationsTypes';

let responsePayload = {};
let error = 'Bad request';

describe('authenticate', () => {
  it('should authenticate a user', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(responsePayload)
      })
    );
    const commit = jest.fn();

    await actions.loginUser({ commit }, { login: 'login', psw: 'psw' });

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.LOGIN_USER_SUCCESS,
      responsePayload
    );
  });

  it('should catch an error', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({
        status: 400,
        message: 'Bad request'
      })
    );

    const commit = jest.fn();

    await actions.loginUser({ commit });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(types.LOGIN_USER_FAIL, error);
  });
});
