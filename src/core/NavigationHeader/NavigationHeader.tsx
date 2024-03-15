import {ReactElement} from 'react';
import { View } from 'react-native';
import Text from '@core/Text';
import { NavigationHeaderProps } from './types';
import styles from './style.ts';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../Button';
import Icon from '../Icon';

const NavigationHeader = ({
                            backHandler = false,
                            buttons = null,
                            style = {},
                            title,
                          }: NavigationHeaderProps): ReactElement => {
const route = useRoute();
const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <View style={{ flex: 1, height: '100%',alignItems:'flex-start' }}>
          {backHandler && <Button  onPress={()=>{
          navigation.goBack();
      }}>
            <Icon name={'ChevronLeft'}/>
      </Button>}
      </View>

      <View style={styles.title_container}>
        {title || (
          <Text style={styles.title} size={'20_600'} numberOfLines={1}>
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
