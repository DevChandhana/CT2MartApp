import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 815;

// normalsing dimensions
function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for widths
const widthPixel = size => {
  return normalize(size, 'width');
};

// for heights
const heightPixel = size => {
  return normalize(size, 'height');
};

// for fontsize
const fontPixel = size => {
  return heightPixel(size);
};

// for margin and padding vertically
const pixelSizeVertical = size => {
  return heightPixel(size);
};

// fot margin and padding horizontally
const pixelSizeHorizontal = size => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
