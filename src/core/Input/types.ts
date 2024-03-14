import React, {  ReactNode } from 'react';
import { ViewStyle, type TextInputProps } from 'react-native';
import Fonts from '@resources/fonts';
import Regex from './regex';

export type ChangeEvent = {
  text: string | undefined
  isValid?: boolean | undefined
  name: string | undefined
}

export interface InputProps extends TextInputProps {
  value?: string,
  placeholder?: string,
  containerStyles?: ViewStyle,
  inputStyles?: ViewStyle,
  fontSize?: keyof typeof Fonts,
  buttons?: ReactNode,
  validationKey?: keyof typeof Regex,
  name?: string,
  errorMassage?: string,
  onChangeInput?: (e: ChangeEvent) => void,
  onFinish?: (e: ChangeEvent) => void,
  secureTextEntry?: boolean,
  frontIcon?: ReactNode,
}

export interface RootComponentProps extends InputProps {
  value: string,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  isValid: boolean,
  visibility: boolean,
  onChangeText:(e:string)=> void
}

export type Regexp = {
  [key: string]: {
    validation: RegExp,
    errorMessage: string
  }
}
