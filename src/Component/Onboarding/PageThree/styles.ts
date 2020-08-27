import {StyleSheet} from 'react-native';
import Theme from '../../../utils/Theme';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  mobileFrame: {
    height: 0.6 * Theme.Window.height,
    width: 0.65 * Theme.Window.width,
  },

  dividerLine: {
    width: '100%',
    height: 1,
    marginTop: 10,
    backgroundColor: '#dfdfdf',
  },

  cardStyle: {
    transform: [{scaleX: 1.5}, {scaleY: 1.2}],
    position: 'absolute',
    top: 0.125 * Theme.Window.height,
    left: 0,
    zIndex: 100,
    right: 0,
  },

  simplLogoStyle: {
    width: 100,
    height: 40,
    marginTop: 10,
  },

  paymentContainer: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },

  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  amountStyle: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    color: '#303030',
    fontWeight: 'bold',
  },

  paymentButtonContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default styles;
