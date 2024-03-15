import { Regexp } from './types';

const Regex:Regexp = {
  //min 8 character, 1 number, 1 UPPERCASE, 1 lowercase, 1 special character
  password: {
    validation: new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$',
    ),
    errorMessage:
      'Password must be at least 6 characters long, contains 1 UPPERCASE 1 lowercase 1.',
  },
  // @, 0 UPPERCASE, only com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)
  email: {
    validation: new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])(?:[A-z])?\\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|mail|ru)\\b",
    ),
    errorMessage: 'Invalid email.',
  },
};

export default Regex;
