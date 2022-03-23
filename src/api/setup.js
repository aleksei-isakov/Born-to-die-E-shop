import axios from 'axios';
import {
  BASE_URL,
  ERROR_400_MESSAGE,
  ERROR_401_MESSAGE,
  DEFAULT_MESSAGE
} from '@/constants.js';
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
        errorMessage = ERROR_400_MESSAGE;
        break;
      case 401:
        errorMessage = ERROR_401_MESSAGE;
        break;
      default:
        errorMessage = DEFAULT_MESSAGE;
    }

    store.dispatch('globalmessagestate/showGlobalMessage', errorMessage);

    return Promise.reject(error);
  }
);

export default instance;
