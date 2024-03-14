import { Colors, Edges } from '@resources/index';
import {
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';
import Fonts  from '@resources/fonts';

const styles = StyleSheet.create<{
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 1,
    ...Edges.padding(8),
  },
  container_: {
    ...Edges.padding(0),
    borderWidth: 0,
    borderRadius: 0,
  },
  container__disabled: {
    ...Edges.padding(0),
    borderWidth: 0,
    borderRadius: 0,
    opacity: 0.5,
  },
  container_primary: {
    backgroundColor: Colors.purple,
    borderColor: Colors.purple,
    fontWeight: '600',
    borderRadius: 8,
  },
  container_primary_disabled: {
    backgroundColor: 'rgba(223, 223, 223, 1)',
    borderColor: 'rgba(223, 223, 223, 1)',
    fontWeight: '600',
    borderRadius: 4,
  },
  container_secondary: {
    backgroundColor: 'white',
    borderColor: Colors.lightGray,
    borderRadius: 4,
  },
  container_secondary_disabled: {
    backgroundColor: 'white',
    borderColor: Colors.lightGray,
  },
  label_: {
    color: 'black',
    ...Fonts['18_600'],
  },
  label_primary: {
    color: 'white',
  },
  label_primary_disabled: {
    color: '#757575',
    ...Fonts['16_600'],
  },
  label_secondary: {
    color: Colors.darkGray,
  },
  label_secondary_disabled: {
    color: 'gray',
  },
});

export default styles;
