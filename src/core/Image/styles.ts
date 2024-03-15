import { Colors, Edges } from '@resources/index';
import {
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';

const styles = StyleSheet.create<{
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
  root: {
    width: '100%',
    position:
      'relative',
    justifyContent:'center',
    alignItems:'center',
  },
  loader:{
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.1)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
});

export default styles;
