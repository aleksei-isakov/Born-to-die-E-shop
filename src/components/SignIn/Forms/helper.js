export const MIN_PASSWORD_LENGTH = 8;
export const MIN_NAME_LENGTH = 2;

import {
  required,
  minLength,
  sameAs,
  email,
  alpha
} from 'vuelidate/lib/validators';

export const FIRST_NAME_VALID = {
  required,
  alpha,
  minLength: minLength(MIN_NAME_LENGTH)
};

export const LAST_NAME_VALID = {
  required,
  alpha,
  minLength: minLength(MIN_NAME_LENGTH)
};

export const EMAIL_VALID = {
  required,
  email
};

export const PASSWORD_VALID = {
  required,
  minLength: minLength(MIN_PASSWORD_LENGTH),
  valid: (password) => {
    return (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  },
  sameAsPassword: sameAs('passwordConfirm')
};

export const PASSWORD_CONFIRM_VALID = {
  required,
  sameAsPassword: sameAs('password')
};
