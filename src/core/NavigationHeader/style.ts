import  Edges  from '@resources/edges';
import {
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from 'react-native';

const styles = StyleSheet.create<{
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    position: 'relative',
    ...Edges.padding(10),
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    zIndex: -1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
   width:'auto',
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
