import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

type Edges = 'top'|
  'left'|
  'right'|
  'bottom';

export type ScreenProps = {
  children: ReactNode,
  style?: ViewStyle,
  contentContainerStyle?: ViewStyle,
  edges?: Edges[],
  header?: ReactNode,
  footer?: ReactNode,
  scrollDisable?: boolean,
  backgroundColor?: string,
}
