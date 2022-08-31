import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text} from 'react-native';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
export default App;
