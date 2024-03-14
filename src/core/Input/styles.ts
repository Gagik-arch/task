import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Edges from '@resources/edges';
import Colors from '@resources/colors';

const styles = StyleSheet.create<{
  [key: string]: TextStyle | ViewStyle;
}>({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    ...Edges.padding(0, 12),
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    height:46,
  },
  error: {
    color: Colors.red,
    ...Edges.margin(0, 0, 10, 0),
  },
  inputView:{ flex: 1 },
});

export default styles;
