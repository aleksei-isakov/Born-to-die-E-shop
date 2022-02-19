import * as types from './mutationsTypes';
const url = ' http://localhost:3000';
const actions = {
  async registerUser({ commit }, payload) {
    await authRequest('register', commit, payload);
  },

  async loginUser({ commit }, payload) {
    await authRequest('login', commit, payload);
  }
};

async function authRequest(endpoint, commit, payload) {
  try {
    commit(types.AUTH_USER_LOADING);
    let data = await fetch(`${url}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (data.status >= 200 && data.status < 300) {
      let authUserInfo = await data.json();

      commit(types.AUTH_USER_SUCCESS, authUserInfo);
      console.log(authUserInfo);
      console.log(data.status);
    } else {
      throw Error(data.statusText);
    }
  } catch (error) {
    console.log(error);
    commit(types.AUTH_USER_FAIL, error.message);
  }
}

export default actions;
