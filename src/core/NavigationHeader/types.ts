import { type ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export type NavigationHeaderProps = {
  backHandler?: boolean,
  buttons?: ReactNode,
  style?: ViewStyle,
  title?: ReactNode,
};
