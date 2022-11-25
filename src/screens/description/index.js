import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// styles
import {styles} from './styles';

const ProductDesc = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Let's do this bitch</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDesc;
