import { type TextStyle } from 'react-native';
import  Fonts  from '@resources/fonts';

export type TextProps = {
  style?: TextStyle | TextStyle[];
  size?: keyof typeof Fonts;
  children:string;
  numberOfLines?:number;
};
