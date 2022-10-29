import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, ActivityIndicator, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, authSelector} from '../../redux/features/authSlice';
import {images} from 'root/constants';
// components
import Header from '../../components/header';
// styles
import {styles} from './styles';

const Home = () => {
  const [categories, setCategories] = React.useState([]);
  const [catImg, setCatImg] = React.useState([
    images.electronics,
    images.jewelery,
    images.men,
    images.women,
  ]);

  React.useEffect(() => {
    fetchCategories();
    console.log(catImg);
  }, []);

  const fetchCategories = async () => {
    const data = await fetch(
      'https://fakestoreapi.com/products/categories',
    ).then(res => res.json());
    setCategories(data);
  };

  const handlingCategories = async cat => {
    const newData = await fetch(
      `https://fakestoreapi.com/products/category/${cat}`,
    );
  };
  const user = useSelector(authSelector);
  console.log(user);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* TODO: display all categories */}
      {categories !== '' || null || undefined ? (
        <View>
          {categories.map((item, index) => (
            <Pressable
              style={styles.catTextBox}
              key={index}
              onPress={() => handlingCategories(item)}>
              <Text style={styles.cartText}>
                {/* first letter to upper case */}
                {item[0].toUpperCase() + item.slice(1)}
              </Text>
              <Image source={catImg[index]} alt="alt" style={styles.catImage} />
            </Pressable>
          ))}
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Home;
