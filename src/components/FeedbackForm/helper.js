import { required, minLength } from 'vuelidate/lib/validators';
export const MIN_NAME_LENGTH = 7;

export const NAME_VALID = {
  required,
  minLength: minLength(MIN_NAME_LENGTH)
};
export const COMMENT_VALID = {
  required,
  minLength: minLength(MIN_NAME_LENGTH)
};
