import {StyleSheet} from 'react-native';
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  containerStyle: {
    width: Theme.Window.width,
    height: 0.7 * Theme.Window.height,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  cardStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 0.53 * Theme.Window.width,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 4,
  },

  transparentBackground: {
    backgroundColor: 'transparent',
  },

  cardTextStyle: {
    fontSize: 15,
    color: 'gray',
    textTransform: 'uppercase',
  },

  scaledCardStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 0.53 * Theme.Window.width,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    transform: [{scaleX: 1.4}, {scaleY: 1.2}],
    marginTop: 25,
    zIndex: 100,
    marginBottom: 10,
  },

  imageStyle: {
    width: 100,
    height: 40,
    marginTop: 10,
    zIndex: 101,
  },
});

export default styles;
