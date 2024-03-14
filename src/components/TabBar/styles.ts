import {
  type ImageStyle,
  StyleSheet,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Edges from '@resources/edges';

const styles = StyleSheet.create< {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    backgroundColor: 'white',
    ...Edges.padding(6, 0),
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    ...Edges.padding(2,0),
  },
  label:{
  ...Edges.margin(4,0,0,0),
  },
});

export default styles;
