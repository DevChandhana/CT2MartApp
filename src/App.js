import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// navigation
import Navigation from './navigations';
import AppStack from './navigations/appstack';

const App = () => {
  useEffect(() => {
    // SplashScreen.show();
    setTimeout(() => {
      //to hide splashscreen after a timeout
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <SafeAreaProvider>
      {/* <Navigation /> */}
      <AppStack />
    </SafeAreaProvider>
  );
};
export default App;
