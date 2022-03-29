import { maskList } from './maskList';
const WHITE_SPACE = /[\s#]/g;
const WHITE_SPACES_AND_SYMBOLS = /[\s#-)(]/g;
const NOT_DIGIT = /\D/g;
const NON_PLUS_SYMBOLS = /(?!\+)./g;
const ANY_DIGIT = /[#\d]/;

export function setMask(inputValue) {
  let template = '+###############';

  maskList.forEach((mask) => {
    let code = mask.code.replace(WHITE_SPACE, '');
    let phone = inputValue.replace(WHITE_SPACES_AND_SYMBOLS, '');

    if (phone.includes(code)) {
      template = mask.code;
    }
  });

  let i = 0;
  let val = inputValue.replace(NOT_DIGIT, '');
  let formattedNumber = template.replace(NON_PLUS_SYMBOLS, function (a) {
    if (ANY_DIGIT.test(a) && i < val.length) {
      return val.charAt(i++);
    }

    if (i >= val.length) {
      return '';
    }

    return a;
  });

  return formattedNumber;
}
