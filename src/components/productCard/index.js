import React from 'react';
import {View, Text, Image} from 'react-native';
// styles
import {styles} from './styles';
const ProductCard = props => {
  const {img, title} = props;
  return (
    <View style={styles.card}>
      <Image source={img} alt="loading" style={styles.prodImg} />
      <Text>{title}</Text>
    </View>
  );
};
export default ProductCard;
