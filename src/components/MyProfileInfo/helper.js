export const MIN_NAME_LENGTH = 2;
export const MIN_PHONE_LENGTH = 10;

import { required, minLength, email, alpha } from 'vuelidate/lib/validators';

export const NAME_VALID = {
  required,
  alpha,
  minLength: minLength(MIN_NAME_LENGTH)
};

export const PHONE_VALID = {
  minLength: minLength(MIN_PHONE_LENGTH)
};

export const EMAIL_VALID = {
  required,
  email
};

export const formMixin = {
  methods: {
    onInputValidateField(fieldName) {
      const field = this.$v[fieldName];

      if (field) {
        return {
          'profile-form__error': field.$invalid && field.$dirty
        };
      }
    },

    onSubmitValidateForm() {
      this.$v.$touch();
    }
  }
};
