import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const Theme = {
  Window: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
};

export default Theme;
