import {StyleSheet} from 'react-native';
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  containerStyle: {},
  mobileFrame: {
    overflow: 'visible',
    // height: 0.6 * Theme.Window.height,
    // width: 0.65 * Theme.Window.width,
  },

  cardStyle: {
    transform: [{scaleX: 1.4}, {scaleY: 1.2}],
  },
});

export default styles;
