import actions from '../actions';
import * as types from '../mutationsTypes';

let responsePayload = {};
let error = 'Bad request';

describe('authenticate', () => {
  it('authenticated a user', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(responsePayload)
      })
    );
    const commit = jest.fn();

    await actions.loginUser({ commit }, { login: 'login', psw: 'psw' });

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenCalledWith(types.AUTH_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(
      types.AUTH_USER_SUCCESS,
      responsePayload
    );
  });

  it('catches an error', async () => {
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
    expect(commit).toHaveBeenCalledWith(types.AUTH_USER_LOADING);
    expect(commit).toHaveBeenCalledWith(types.AUTH_USER_FAIL, error);
  });
});
