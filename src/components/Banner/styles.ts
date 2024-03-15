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
        height: 200,
    },
    pagerView: {
        flex: 1,
    },
});

export default styles;
