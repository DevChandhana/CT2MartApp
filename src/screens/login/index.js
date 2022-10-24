import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, TextInput, Text, View, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {login, authSelector} from '../../redux/features/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// images
import {images} from 'root/constants';
// styles
import {styles} from './styles/index';
// helpers
import SocialBtns from './helpers/socialbtns';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigator = useNavigation();
  const dispatch = useDispatch();

  // signin handling function
  const handleSignIn = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          storeData(user.user.uid);
          dispatch(
            login({
              email: user.user.email,
              uid: user.user.uid,
              displayName: user.user.displayName,
            }),
          );
        })
        .then(() => navigator.navigate('Home'))
        .catch(err => alert(err));
    } else alert('Please enter a valid email');
  };

  const storeData = async user => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={images.logo}
        alt="logo"
        style={styles.logo}
        duration={2000}
        animation={'fadeInDown'}
      />
      <Text style={styles.heading}>Hey Buddy, welcome</Text>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginTop: 5,
          fontSize: 18,
          fontWeight: '700',
          marginLeft: 25,
        }}>
        SignIn
      </Text>
      <View style={styles.textboxContainer}>
        <TextInput
          placeholder="Enter email"
          style={styles.textbox}
          value={email}
          onChangeText={email => setEmail(email)}
          placeholderTextColor={'black'}
        />
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.textbox}
          placeholderTextColor={'black'}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        {/* forgot password button */}
        <Pressable style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#FF4A4A', fontWeight: 'bold', fontSize: 14}}>
            Forgot password?
          </Text>
        </Pressable>
        <Pressable style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.signInText}>SignIn</Text>
        </Pressable>
      </View>
      <SocialBtns />
      <Pressable
        style={{marginTop: 15}}
        onPress={() => navigator.navigate('SignUp')}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>
          Don't have an account? <Text style={{color: '#FF4A4A'}}>SignUp</Text>
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Login;
