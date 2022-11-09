import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {heightPixel, widthPixel, fontPixel} from 'root/utils';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.text,
    width: widthPixel(340),
    height: heightPixel(320),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  prodImg: {
    height: 200,
    width: 200,
    shadowOpacity: 0.5,
    resizeMode: 'contain',
    marginTop: 10,
  },
  prodTxt: {
    fontSize: fontPixel(14),
    color: colors.white,
    marginVertical: heightPixel(14),
    marginHorizontal: widthPixel(10),
    fontWeight: '700',
    fontStyle: 'oblique',
  },
});
