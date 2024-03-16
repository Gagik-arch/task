import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import StackNavigator from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

export default () => {

    // useEffect(() => {
    //   SplashScreen.hide();
    // }, []);

    return (
      <Provider store={store}>
          <SafeAreaProvider>
              <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
              />
              <NavigationContainer>
                  <StackNavigator />
              </NavigationContainer>
              <Toast />
          </SafeAreaProvider>
      </Provider>
    );
};
