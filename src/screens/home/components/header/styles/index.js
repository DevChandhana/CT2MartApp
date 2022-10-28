import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {heightPixel, widthPixel, fontPixel} from 'root/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPixel(60),
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(10),
    borderLeftWidth: 1,
    borderLeftColor: colors.black,
    borderRightWidth: 1,
    borderRightColor: colors.black,
  },
  textBox: {
    width: widthPixel(200),
    borderWidth: 1.5,
    borderColor: colors.black,
    padding: widthPixel(6),
    borderRadius: 10,
    marginLeft: widthPixel(10),
  },
  menu: {
    height: 30,
    width: 30,
    opacity: 0.7,
    marginHorizontal: widthPixel(10),
  },
  cart: {
    height: 30,
    width: 30,
    opacity: 0.7,
    marginHorizontal: widthPixel(10),
    marginLeft: widthPixel(30),
  },
  brand: {
    marginHorizontal: widthPixel(7),
  },
  brandText: {
    fontSize: fontPixel(14),
    fontWeight: '800',
    fontStyle: 'italic',
  },
  items: {
    position: 'absolute',
    right: 0,
    marginRight: widthPixel(7),
    bottom: heightPixel(35),
    color: colors.danger,
    fontWeight: '600',
  },
});
