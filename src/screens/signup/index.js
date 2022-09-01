import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Image, Pressable, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {images} from 'root/constants';

// styles
import {styles} from './styles';

const SignUp = () => {
  // navigation handler
  const navigator = useNavigation();
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
          placeholder="Enter email"
          style={styles.textbox}
          placeholderTextColor={'black'}
        />
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.textbox}
          placeholderTextColor={'black'}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          style={styles.textbox}
          placeholderTextColor={'black'}
        />
        <Pressable style={styles.signInBtn}>
          <Text style={styles.signInText}>SignUp</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
