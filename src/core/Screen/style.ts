import {
  type ImageStyle,
  StyleSheet,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

const styles = StyleSheet.create<{
  [key: string]: ViewStyle | TextStyle | ImageStyle;
}>({
  root: {
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    height: '100%',
  },
});

export default styles;
