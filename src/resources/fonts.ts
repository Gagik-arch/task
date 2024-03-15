import {StyleSheet, TextStyle} from 'react-native';

const Fonts = StyleSheet.create<{
  [key: string]: TextStyle;
}>({
  '24_600': {
    fontSize: 24,
    fontWeight: '600',
  },
  '20_600': {
    fontSize: 20,
    fontWeight: '500',
  },
  '18_600': {
    fontSize: 18,
    fontWeight: '600',
  },
  '16_600': {
    fontSize: 16,
    fontWeight: '600',
  },
  '14_400': {
    fontSize: 12,
    fontWeight: '600',
  },
  '12_400': {
    fontSize: 12,
    fontWeight: '400',
  },

  '10_400': {
    fontSize: 10,
    fontWeight: '400',
  },
});

export default Fonts;
