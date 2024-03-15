import {  Edges } from '@resources/index';
import {
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';


const styles = StyleSheet.create<{
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
root:{
  ...Edges.padding(12),
},
  form:{
  rowGap:16,
  },
});

export default styles;
