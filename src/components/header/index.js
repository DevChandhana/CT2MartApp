import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {styles} from './styles';
import {images} from 'root/constants';
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={images.menu} alt="menu" style={styles.menu} />
      <View style={styles.brand}>
        <Text style={styles.brandText}>CT²</Text>
        <Text style={styles.brandText}>Mart</Text>
      </View>
      <TextInput placeholder="Search" style={styles.textBox} />
      {/* TODO: add logo's for cart and account section*/}
      <Image source={images.cart} alt="cart" style={styles.cart} />
      <Text style={styles.items}>10</Text>
    </View>
  );
};
export default Header;
