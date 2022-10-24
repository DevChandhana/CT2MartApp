import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importing screens
import {Login, SignUp, Home} from 'screens';

// stack navigator
const stack = createNativeStackNavigator();
const {Screen, Navigator} = stack;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
