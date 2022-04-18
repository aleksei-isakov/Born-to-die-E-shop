import { USER_ROLE_ADMIN } from '@/constants';

const getters = {
  currentUserInfo: (state) => state.currentUserInfo,
  errorMessageLogin: (state) => state.errorMessageLogin,
  errorMessageRegister: (state) => state.errorMessageRegister,
  isAdmin: (state) => state.currentUserInfo?.user?.role === USER_ROLE_ADMIN
};

export default getters;
