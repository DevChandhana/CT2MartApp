import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {heightPixel, widthPixel, fontPixel} from 'root/utils';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.text,
    width: widthPixel(300),
    height: heightPixel(320),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  prodImg: {
    height: 150,
    width: 150,
    shadowOpacity: 0.5,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
