import React from 'react';
import {View, Text, Image} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {images} from 'root/constants';
// styles
import {styles} from './styles';
const ProductCard = props => {
  const {img, title, price} = props;
  let arr = new Array(5);
  return (
    <View style={styles.card}>
      <Image source={img} alt="loading" style={styles.prodImg} />
      <Text style={styles.prodTxt}>{title}</Text>
      <View style={{flexDirection: 'row'}}>{/* TODO: add rating */}</View>
      <Text style={styles.prodTxt}>{price}</Text>
    </View>
  );
};
export default ProductCard;
