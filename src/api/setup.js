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
    const ERROR_400 = 400;
    const ERROR_401 = 401;
    const ERROR_400_MESSAGE = 'Incorrect e-mail/password';
    const ERROR_401_MESSAGE = 'Please, log in to proceed';

    switch (status) {
      case ERROR_400:
        errorMessage = ERROR_400_MESSAGE;
        break;
      case ERROR_401:
        errorMessage = ERROR_401_MESSAGE;
        break;
      default:
        errorMessage = 'Server error';
    }

    store.dispatch('globalmessagestate/showGlobalMessage', errorMessage);

    return Promise.reject(error);
  }
);

export default instance;
