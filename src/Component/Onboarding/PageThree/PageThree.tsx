import React from 'react';
import {View, Text, Image, Animated} from 'react-native';
import CommonStyle from '../styles';
import Styles from './styles';
import MobileFrame from '../../MobileFrame/MobileFrame';
import {R} from '../../../utils/R';

export declare interface Props {
  scrollAnimated: Animated.Value;
}
export declare interface State {}

export default class PageThree extends React.Component<Props, State> {
  render() {
    return (
      <View style={CommonStyle.containerStyle}>
        <MobileFrame>
          <View style={Styles.containerStyle}>
            <Image
              style={Styles.simplLogoStyle}
              source={R.Images.SimplLogo}
              resizeMode="contain"
            />

            <View style={Styles.dividerLine} />

            <View style={Styles.paymentContainer}>
              <View style={Styles.paymentRow}>
                <Image
                  source={R.Images.BookMyShowLogo}
                  style={[Styles.simplLogoStyle, {opacity: 0}]}
                  resizeMode="contain"
                />

                <Text style={Styles.amountStyle}>Rs. 500</Text>
              </View>

              <View style={Styles.paymentRow}>
                <Image
                  source={R.Images.SwiggyLogo}
                  style={[Styles.simplLogoStyle, {opacity: 0}]}
                  resizeMode="contain"
                />

                <Text style={Styles.amountStyle}>Rs. 500</Text>
              </View>

              <View style={Styles.paymentRow}>
                <Image
                  source={R.Images.ZomatoLogo}
                  style={[Styles.simplLogoStyle, {opacity: 0}]}
                  resizeMode="contain"
                />

                <Text style={Styles.amountStyle}>Rs. 500</Text>
              </View>

              <View style={Styles.paymentRow}>
                <Image
                  source={R.Images.DunzoLogo}
                  style={[Styles.simplLogoStyle, {opacity: 0}]}
                  resizeMode="contain"
                />

                <Text style={Styles.amountStyle}>Rs. 500</Text>
              </View>
            </View>

            <View style={Styles.paymentButtonContainer}>
              <Text>Pay Rs.2000</Text>
            </View>
          </View>
        </MobileFrame>
      </View>
    );
  }
}
