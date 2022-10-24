import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
// navigation
import Navigation from './navigations';
import AppStack from './navigations/appstack';
// redux related stuff
import {store} from './redux/store';
import {Provider} from 'react-redux';
const App = () => {
  const [userId, setUserId] = React.useState();
  useEffect(() => {
    // SplashScreen.show();
    setTimeout(() => {
      //to hide splashscreen after a timeout
      SplashScreen.hide();
    }, 1000);
    getData();
  }, []);
  const getData = async () => {
    try {
      const uid = await AsyncStorage.getItem('userId');
      setUserId(uid);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {userId ? <AppStack /> : <Navigation />}
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
