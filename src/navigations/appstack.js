import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Products} from 'screens';
// stack navigator
const stack = createNativeStackNavigator();
const {Screen, Navigator} = stack;

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Products" component={Products} />
      </Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
