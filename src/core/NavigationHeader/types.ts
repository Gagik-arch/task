import { type ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type NavigationHeaderProps = {
  backHandler: ReactNode,
  buttons: ReactNode,
  style: ViewStyle,
  title: ReactNode,
};
