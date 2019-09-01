export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true; // if no validation rules are define return true
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid; // false overwrites true, if one of the values is false whole expression is false
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.constantLength) {
    isValid = value.length === 3 && isValid;
  }

  return isValid;
};
