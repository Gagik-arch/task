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
      flex:1,
        position:'relative',
    },
    pagerView: {
        flex: 1,
    },
    wash_list_btn:{
        position:'absolute',
        right:20,
        top:10,
    },
});

export default styles;
