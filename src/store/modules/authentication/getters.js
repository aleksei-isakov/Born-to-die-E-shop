import { USER_ROLE_ADMIN, USER_ROLE_CONSUMER } from '@/constants';

const getters = {
  currentUserInfo: (state) => state.currentUserInfo,
  errorMessageLogin: (state) => state.errorMessageLogin,
  errorMessageRegister: (state) => state.errorMessageRegister,
  isConsumer: (state) =>
    state.currentUserInfo?.user?.role === USER_ROLE_CONSUMER,
  isAdmin: (state) => state.currentUserInfo?.user?.role === USER_ROLE_ADMIN
};

export default getters;
