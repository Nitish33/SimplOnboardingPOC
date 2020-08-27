import {StyleSheet} from 'react-native';
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  containerStyle: {
    zIndex: 2,
  },

  mobileFrameContainer: {
    width: '100%',
    flex: 1,
  },

  singleRowStyle: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 0,
  },

  mobileContainerFirst: {
    flex: 1,
    transform: [
      {scaleY: 0.5},
      {scaleX: 0.6},
      {translateY: -0.15 * Theme.Window.height},
      {translateX: -0.075 * Theme.Window.width},
    ],
  },

  iconsContainer: {
    zIndex: 10,
    backgroundColor: 'transparent',
  },

  hidden: {
    opacity: 0,
  },
});

export default styles;
