import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import Edges from '@resources/edges';

const styles = StyleSheet.create<{ [key: string]: ViewStyle | TextStyle }>({
    card: {
        flex: 0.48,
        borderRadius: 6,
        backgroundColor: 'rgb(194,144,255)',
        overflow: 'hidden',
    },
    wash_list_btn:{
        position:'absolute',
        right:10,
        top:10,
    },
});

export default styles;
