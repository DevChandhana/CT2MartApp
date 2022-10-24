import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, authSelector} from '../../redux/features/authSlice';

const Home = () => {
  const user = useSelector(authSelector);
  console.log(user);
  return (
    <SafeAreaView>
      <Text>Home page</Text>
    </SafeAreaView>
  );
};
export default Home;
