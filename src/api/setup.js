import axios from 'axios';
import { BASE_URL } from '@/constants.js';
import store from '@/store';

const HEADERS = {
  'Content-Type': 'application/json'
};
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: HEADERS
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    let errorMessage;

    switch (status) {
      case 400:
        errorMessage = 'Incorrect e-mail/password';
        break;
      case 401:
        errorMessage = 'Please, log in to proceed';
        break;
      default:
        errorMessage = 'Server error';
    }

    store.dispatch('globalmessagestate/showGlobalMessage', errorMessage);

    return Promise.reject(error);
  }
);

export default instance;
