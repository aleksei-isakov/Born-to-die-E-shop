import { maskList } from './maskList';

export function setMask(inputValue) {
  let template = '+###############';

  maskList.forEach((mask) => {
    let code = mask.code.replace(/[\s#]/g, '');
    let phone = inputValue.replace(/[\s#-)(]/g, '');

    if (phone.includes(code)) {
      template = mask.code;
    }
  });

  let i = 0;
  let val = inputValue.replace(/\D/g, '');
  let formattedNumber = template.replace(/(?!\+)./g, function (a) {
    return /[#\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ''
      : a;
  });

  return formattedNumber;
}
