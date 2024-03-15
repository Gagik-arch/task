import { type TextStyle, type ViewStyle } from 'react-native';
import Fonts from '@resources/fonts';
import { ReactNode } from 'react';

export type ButtonProps = {
  label?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  textSize?: keyof typeof Fonts;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  children?: ReactNode | ReactNode[];
  disabled?: boolean;
  onPress: () => void;
  onDisable?: () => void;
};
