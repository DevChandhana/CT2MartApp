import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importing screens
import {Login} from 'screens';

// stack navigator
const stack = createNativeStackNavigator();
const {Screen, Navigator} = stack;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
