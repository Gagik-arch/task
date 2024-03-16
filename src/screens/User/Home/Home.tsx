import { ReactElement } from 'react';
import Banner from '@components/Banner';
import HomeContainer from '@containers/HomeContainer';
import Screen from '@core/Screen';
import NavigationHeader from '@core/NavigationHeader';
import Text from '@core/Text';
import { View } from 'react-native';
import Icon from '@core/Icon';
import Colors from '@resources/colors';
import Button from '../../../core/Button';
import styles from './style';
import Routes from '@resources/routes.ts';
import { useNavigation } from '@react-navigation/native';

const Home = (): ReactElement => {
    const navigation = useNavigation();

    return (
      <Screen scrollDisable={true}
              header={<NavigationHeader
                title={
                    <View style={{ width: '100%' }}>
                        <Button style={styles.search}
                                variant={'secondary'}
                                onPress={() => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: Routes.ProductList }],
                                    });
                                }}>
                            <Text size={'16_600'}
                                  style={{ color: Colors.lightGray }}
                            >Search...</Text>
                            <Icon name={'Search'} />
                        </Button>
                    </View>
                }
              />}
      >
          <Banner />
          <HomeContainer />
      </Screen>
    );
};


export default Home;
