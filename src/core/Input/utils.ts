import Regex from './regex.ts';

export const validateField = (fieldName:keyof typeof Regex, text:string) =>
  Regex[fieldName].validation.test(text);

