import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

const styles = StyleSheet.create<{ [key: string]: ViewStyle | TextStyle }>({
    search: {
        width: '100%',
        justifyContent: 'space-between',
    },
});

export default styles;
