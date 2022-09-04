import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
  heightPixel,
  widthPixel,
  fontPixel,
} from 'root/utils';

export const styles = StyleSheet.create({
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(320),
    margin: widthPixel(5),
    marginTop: heightPixel(15),
    height: heightPixel(47),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  facebookBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(320),
    margin: widthPixel(5),
    marginTop: heightPixel(8),
    height: heightPixel(47),
    backgroundColor: '#0F5EA3',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    marginHorizontal: pixelSizeHorizontal(15),
    marginRight: widthPixel(55),
    height: 40,
    width: 40,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: fontPixel(14),
  },
});
