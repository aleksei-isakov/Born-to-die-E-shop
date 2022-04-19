import axios from '@/api/setup';
import store from '@/store';
import {
  ERROR_400_MESSAGE,
  ERROR_401_MESSAGE,
  DEFAULT_MESSAGE
} from '@/constants.js';

export default function interceptorsSetup() {
  axios.interceptors.response.use(
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
          store.dispatch('AuthenticationModule/clearCurrentUser');
          store.dispatch('ShoppingCartModule/clearCart');
          break;
        default:
          errorMessage = DEFAULT_MESSAGE;
      }

      store.dispatch('globalmessagestate/showGlobalMessage', errorMessage);

      return Promise.reject(error);
    }
  );

  axios.interceptors.request.use(
    (request) => {
      if (
        request.url?.includes('cart') ||
        request.url?.includes('users') ||
        request.method === 'patch' ||
        request.method === 'delete' ||
        request.method === 'put' ||
        request.method === 'post'
      ) {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          request.headers.Authorization = `Bearer ${accessToken}`;
        }
      }

      return request;
    },
    (error) => Promise.reject(error)
  );
}
