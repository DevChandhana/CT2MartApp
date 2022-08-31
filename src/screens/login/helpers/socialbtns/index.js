import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {images} from 'root/constants';
// styles
import {styles} from './styles';
const SocialBtns = () => {
  return (
    <View>
      <Pressable style={styles.googleBtn}>
        <Image source={images.google} alt="google" style={styles.image} />
        <Text style={styles.btnText}>Login with Google</Text>
      </Pressable>
      <Pressable style={styles.facebookBtn}>
        <Image source={images.facebook} alt="facebook" style={styles.image} />
        <Text style={[{color: 'white'}, styles.btnText]}>
          Login with Facebook
        </Text>
      </Pressable>
    </View>
  );
};
export default SocialBtns;
