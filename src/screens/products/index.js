import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text, Image, View} from 'react-native';
// styles
import {styles} from './styles';
// components
import Header from '../../components/header';
import ProductCard from '../../components/productCard';

const Products = ({route}) => {
  const item = route.params;
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/category/${item}`,
    ).then(res => res.json());
    setProducts(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            img={[item.image]}
            title={item.title}
            price={item.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Products;
