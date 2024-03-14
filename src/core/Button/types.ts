import { type TextStyle, type ViewStyle } from 'react-native';
import  Fonts  from '@resources/fonts';

export type ButtonProps = {
  label?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  textSize?:  keyof typeof Fonts;
  variant?: 'primary' | 'secondary' ;
  isLoading?: boolean;
  children?: string | string[];
  disabled?: boolean;
};
