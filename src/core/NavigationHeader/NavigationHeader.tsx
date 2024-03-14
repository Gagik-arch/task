import {ReactElement} from 'react';
import { View } from 'react-native';
import Text from '@core/Text';
import { NavigationHeaderProps } from './types';
import styles from './style.ts';
import {  useRoute } from '@react-navigation/native';

const NavigationHeader = ({
                            backHandler,
                            buttons = null,
                            style = {},
                            title,
                          }: NavigationHeaderProps): ReactElement => {
const route = useRoute();

  return (
    <View style={[styles.container, style]}>
      <View style={{ flex: 1, height: '100%' }}>
        {backHandler}
      </View>

      <View style={styles.title_container}>
        {title || (
          <Text style={styles.title} size={'17_500'} numberOfLines={1}>
            {route.name}
          </Text>
        )}
      </View>

      <View style={styles.buttons}>
        {buttons}
      </View>
    </View>
  );
};

export default NavigationHeader;
