import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// styles
import {styles} from './styles';
import {images} from 'root/constants';
import Header from 'root/components/header';

const ProductDesc = ({route}) => {
  const id = route.params;
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    const daa = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      res => res.json(),
    );
    setData(daa);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        {/* TODO: change header per particular screens and maintain cart same
         */}
        {/* <Image source={images.back} alt="back" /> */}
        <Text>{data.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDesc;
