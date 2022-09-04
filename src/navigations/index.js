import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importing screens
import {Login, SignUp} from 'screens';

// stack navigator
const stack = createNativeStackNavigator();
const {Screen, Navigator} = stack;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
