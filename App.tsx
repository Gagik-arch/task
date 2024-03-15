import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import StackNavigator from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useEffect } from 'react';
import userStore from './src/store/user';
// import SplashScreen from 'react-native-splash-screen';
// import themes, { ThemeContext } from './src/resources/themes';
// import { Provider } from 'react-redux';
// import store from './src/store';
export default () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content' }
        />
        {/*<ThemeContext.Provider value={scheme}>*/}
        {/*  <BottomSheetModalProvider>*/}
        <NavigationContainer>
          <StackNavigator userStore={userStore} />
        </NavigationContainer>
        {/*</BottomSheetModalProvider>*/}
        {/*</ThemeContext.Provider>*/}
        <Toast />
      </SafeAreaProvider>
  );
};
