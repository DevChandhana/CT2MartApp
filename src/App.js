import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// navigation
import Navigation from './navigations';
import AppStack from './navigations/appstack';
// redux related stuff
import {store} from './redux/store';
import {Provider} from 'react-redux';
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
      <Provider store={store}>
        <Navigation />
        {/* <AppStack /> */}
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
