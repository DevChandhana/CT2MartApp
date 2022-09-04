import {StyleSheet} from 'react-native';
import {colors} from 'root/constants';
import {heightPixel, widthPixel, fontPixel} from 'root/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
  },
  back: {
    alignSelf: 'flex-start',
    marginLeft: widthPixel(14),
  },
  backImg: {
    height: 25,
    width: 25,
  },
  logo: {
    height: 300,
    width: 300,
  },
  heading: {
    color: colors.text,
    marginTop: heightPixel(25),
    fontWeight: 'bold',
    fontSize: fontPixel(22),
    alignSelf: 'flex-start',
    marginLeft: 25,
    opacity: 0.5,
  },
  textboxContainer: {
    marginTop: heightPixel(12),
  },
  textbox: {
    borderWidth: 1,
    width: widthPixel(320),
    margin: widthPixel(5),
    height: heightPixel(47),
    borderRadius: 10,
    color: colors.text,
    fontSize: fontPixel(14),
    padding: 5,
  },
  signInBtn: {
    width: widthPixel(320),
    margin: widthPixel(5),
    marginTop: heightPixel(15),
    height: heightPixel(47),
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
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
  signInText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: fontPixel(14),
  },
});
