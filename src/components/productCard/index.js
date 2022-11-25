import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {images} from 'root/constants';
import {useNavigation} from '@react-navigation/native';
// styles
import {styles} from './styles';

const ProductCard = props => {
  const {img, title, price, id} = props;
  let arr = new Array(5);
  const navigator = useNavigation();
  const handlingNav = id => {
    navigator.navigate('ProductDesc', id);
  };
  return (
    <Pressable style={styles.card} onPress={() => handlingNav(id)}>
      <Image source={img} alt="loading" style={styles.prodImg} />
      <Text style={styles.prodTxt}>{title}</Text>
      <View style={{flexDirection: 'row'}}>{/* TODO: add rating */}</View>
      <Text style={styles.prodTxt}>{price}</Text>
    </Pressable>
  );
};
export default ProductCard;
