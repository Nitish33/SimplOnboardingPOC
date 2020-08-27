import {StyleSheet} from 'react-native';
import Theme from '../../utils/Theme';

const styles = StyleSheet.create({
  containerStyle: {
    width: 0.65 * Theme.Window.width,
    height: 0.6 * Theme.Window.height,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },

  earPieceStyle: {
    width: 50,
    height: 4,
    borderRadius: 1,
    backgroundColor: 'black',
  },

  mobileScreen: {
    marginTop: 20,
    backgroundColor: '#efefef',
    flex: 1,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
