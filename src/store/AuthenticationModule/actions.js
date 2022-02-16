import * as types from './mutationsTypes';

const actions = {
  async registerUser({ commit }, payload) {
    try {
      commit(types.REGISTER_USER_LOADING);
      let data = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let registeredUserInfo = await data.json();

      commit(types.REGISTER_USER_SUCCESS, registeredUserInfo);
    } catch (error) {
      console.log(error);
      commit(types.REGISTER_USER_FAIL);
    }
  },

  async loginUser({ commit }, payload) {
    try {
      commit(types.LOGIN_USER_LOADING);
      let data = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let loginUserInfo = await data.json();

      commit(types.LOGIN_USER_SUCCESS, loginUserInfo);
    } catch (error) {
      console.log(error);
      commit(types.LOGIN_USER_SUCCESS);
    }
  }

  // async getUser({ commit }, payload) {
  //   try {
  //     commit(types.LOGIN_USER_LOADING);
  //     let data = await fetch('http://localhost:3000/users');
  //     let loginUserInfo = await data.json();
  //     console.log(first)
  //     // commit(types.LOGIN_USER_SUCCESS, loginUserInfo);
  //   } catch (error) {
  //     console.log(error);
  //     commit(types.LOGIN_USER_SUCCESS);
  //   }
  // }
};

export default actions;
