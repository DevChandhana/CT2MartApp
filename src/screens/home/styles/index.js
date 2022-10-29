import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {heightPixel, widthPixel, fontPixel} from 'root/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  catImage: {
    shadowOpacity: 0.5,
    resizeMode: 'contain',
    height: 80,
    width: 80,
    marginVertical: heightPixel(10),
  },

  catTextBox: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.text,
    borderRadius: 10,
    marginVertical: heightPixel(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: widthPixel(340),
    alignSelf: 'center',
    elevation: 5,
  },
  cartText: {
    color: colors.white,
    marginTop: heightPixel(10),
    fontSize: fontPixel(16),
  },
});
