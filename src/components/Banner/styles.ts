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
        height: 160,
    },
    pagerView: {
        flex: 1,
    },
});

export default styles;
