import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import Edges from '@resources/edges';

const styles = StyleSheet.create<{ [key: string]: ViewStyle | TextStyle }>({
    root: {
        ...Edges.padding(12),
    },
    cards: {
        ...Edges.margin(10, 0),
    },
});

export default styles;
