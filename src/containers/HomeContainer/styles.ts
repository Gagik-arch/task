import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import Edges from '@resources/edges';

const styles = StyleSheet.create<{ [key: string]: ViewStyle | TextStyle }>({
    root: {
        ...Edges.padding(12),
    },
    cards: {
        ...Edges.margin(10, 0),
    },
    card: {
        flex: 0.48,
        borderRadius: 6,
        backgroundColor: 'rgb(197,105,211)',
        overflow: 'hidden',
    },
});

export default styles;
