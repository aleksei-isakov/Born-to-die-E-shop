import * as types from './mutationsTypes';
import { BASE_URL } from '@/constants';

const actions = {
  async registerUser({ commit }, payload) {
    await authRequest(
      'register',
      commit,
      payload,
      types.REGISTER_USER_LOADING,
      types.REGISTER_USER_SUCCESS,
      types.REGISTER_USER_FAIL
    );
  },

  async loginUser({ commit }, payload) {
    await authRequest(
      'login',
      commit,
      payload,
      types.LOGIN_USER_LOADING,
      types.LOGIN_USER_SUCCESS,
      types.LOGIN_USER_FAIL
    );
  }
};

function optionsData(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return options;
}

async function authRequest(
  endpoint,
  commit,
  payload,
  mutationsTypesLoading,
  mutationsTypesSuccess,
  mutationsTypesFail
) {
  try {
    commit(mutationsTypesLoading);
    let data = await fetch(`${BASE_URL}/${endpoint}`, optionsData(payload));

    if (data.ok) {
      let authUserInfo = await data.json();

      commit(mutationsTypesSuccess, authUserInfo);
    } else {
      throw Error(data.statusText);
    }
  } catch (error) {
    console.error(error);
    commit(mutationsTypesFail, error.message);
  }
}

export default actions;