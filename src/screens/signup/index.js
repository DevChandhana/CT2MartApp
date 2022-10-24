import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Image, Pressable, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import {images} from 'root/constants';
import {useDispatch, useSelector} from 'react-redux';
import {login, authSelector} from '../../redux/features/authSlice';

// styles
import {styles} from './styles';

const SignUp = () => {
  // navigation handler
  const navigator = useNavigation();
  // states to handle user inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonHandle, setButtonHandle] = useState(false);

  const dispatch = useDispatch();
  // function to handle signup
  const handleSignup = () => {
    setButtonHandle(true);
    // making sure that all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      alert('please enter all fields');
    }
    // email validation
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      // making sure that user entered valid password
      if (password === confirmPassword) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch(
              login({
                email: user.user.email,
                uid: user.user.uid,
                displayName: name,
              }),
            );
          })
          .then(() => navigator.navigate('Home'))
          .catch(err => alert(err));
      }
    } else alert('invalid email');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigator.goBack()}>
        <Image source={images.back} alt="back" style={styles.backImg} />
      </Pressable>
      <Animatable.Image
        source={images.logo}
        alt="logo"
        style={styles.logo}
        duration={2000}
        animation={'fadeInDown'}
      />
      <Text style={styles.heading}>Thanks for choosing us</Text>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginTop: 5,
          fontSize: 12,
          fontWeight: '700',
          marginLeft: 25,
        }}>
        By signing up, you will be accepting our privacy policy
      </Text>
      <View style={styles.textboxContainer}>
        <TextInput
          placeholder="Enter name"
          style={styles.textbox}
          placeholderTextColor={'black'}
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          placeholder="Enter email"
          style={styles.textbox}
          placeholderTextColor={'black'}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.textbox}
          placeholderTextColor={'black'}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          style={styles.textbox}
          placeholderTextColor={'black'}
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
        <Pressable style={styles.signInBtn} onPress={handleSignup}>
          {/* // disabled={buttonHandle}> */}
          <Text style={styles.signInText}>SignUp</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
