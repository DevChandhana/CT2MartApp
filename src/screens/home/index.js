import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, authSelector} from '../../redux/features/authSlice';
// components
import Header from './components/header';
// styles
import {styles} from './styles';

const Home = () => {
  const user = useSelector(authSelector);
  console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Home page</Text>
    </SafeAreaView>
  );
};
export default Home;
