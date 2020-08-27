import React from 'react';
import {Text, View, Image, Animated, ViewStyle, Platform} from 'react-native';
import MobileFrame from '../../MobileFrame/MobileFrame';
import CommonStyle from '../styles';
import Styles from './styles';
import {R} from '../../../utils/R';
import Theme from '../../../utils/Theme';

export declare interface Props {
  scrollAnimated: Animated.Value;
}
export declare interface State {}

const yOffset = Platform.OS === 'ios' ? 0 : 7;
const xOffset = Platform.OS === 'ios' ? 0 : 15;

export default class PageOne extends React.Component<Props, State> {
  getCommonScaleStyle = (): Array<Animated.WithAnimatedValue<ViewStyle>> => {
    const {scrollAnimated} = this.props;

    const xInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.4, 1.5 * 0.5],
      extrapolate: 'clamp',
    });

    const yInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.2, 1.2 * 0.5],
      extrapolate: 'clamp',
    });

    return [{scaleX: xInterpolation}, {scaleY: yInterpolation}];
  };

  getBookMyShowCardTranslation = (): Animated.WithAnimatedValue<ViewStyle> => {
    const initialTopPosition = 190;
    const finalTopPosition = 0.025 * Theme.Window.height + 35 + yOffset;

    const {scrollAnimated} = this.props;

    const xInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.4, 1.7 * 0.5],
      extrapolate: 'clamp',
    });

    const yInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.2, 1.2 * 0.5],
      extrapolate: 'clamp',
    });

    const xTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, R.Theme.Window.width - 105 + xOffset],
      extrapolate: 'clamp',
    });

    const yTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, -(initialTopPosition - finalTopPosition)],
      extrapolate: 'clamp',
    });

    return {
      transform: [
        {translateX: xTranslation},
        {translateY: yTranslation},
        {scaleX: xInterpolation},
        {scaleY: yInterpolation},
      ],
      zIndex: 100,
    };
  };

  getSwiggyCardTranslation = (): Animated.WithAnimatedValue<ViewStyle> => {
    const initialTopPosition = 165;
    const finalTopPosition = 0.025 * Theme.Window.height + 90 + yOffset;

    const {scrollAnimated} = this.props;

    const xInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.4, 1.7 * 0.51],
      extrapolate: 'clamp',
    });

    const yInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.2, 1.2 * 0.5],
      extrapolate: 'clamp',
    });

    const xTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [
        0,
        R.Theme.Window.width - 105 + 0.5 * R.Theme.Window.width + xOffset,
      ],
      extrapolate: 'clamp',
    });

    const yTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, -(initialTopPosition - finalTopPosition)],
      extrapolate: 'clamp',
    });

    return {
      transform: [
        {translateX: xTranslation},
        {translateY: yTranslation},
        {scaleX: xInterpolation},
        {scaleY: yInterpolation},
      ],
      zIndex: 100,
    };
  };

  getZomatoCardTranslation = (): Animated.WithAnimatedValue<ViewStyle> => {
    const initialTopPosition = 190;
    const finalTopPosition = 0.375 * Theme.Window.height + 7 + yOffset;

    const {scrollAnimated} = this.props;

    const xInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.4, 1.7 * 0.5],
      extrapolate: 'clamp',
    });

    const yInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.2, 1.2 * 0.5],
      extrapolate: 'clamp',
    });

    const xTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, R.Theme.Window.width - 105 + xOffset],
      extrapolate: 'clamp',
    });

    const yTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, -(initialTopPosition - finalTopPosition)],
      extrapolate: 'clamp',
    });

    return {
      transform: [
        {translateX: xTranslation},
        {translateY: yTranslation},
        {scaleX: xInterpolation},
        {scaleY: yInterpolation},
      ],
      zIndex: 100,
    };
  };

  getDunzoCardTranslation = (): Animated.WithAnimatedValue<ViewStyle> => {
    const initialTopPosition = 190;
    const finalTopPosition = 0.375 * Theme.Window.height + 60 + yOffset;

    const {scrollAnimated} = this.props;

    const xInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.4, 1.7 * 0.5],
      extrapolate: 'clamp',
    });

    const yInterpolation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [1.2, 1.2 * 0.5],
      extrapolate: 'clamp',
    });

    const xTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [
        0,
        R.Theme.Window.width - 105 + 0.5 * R.Theme.Window.width + xOffset,
      ],
      extrapolate: 'clamp',
    });

    const yTranslation = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width],
      outputRange: [0, -(initialTopPosition - finalTopPosition)],
      extrapolate: 'clamp',
    });

    return {
      transform: [
        {translateX: xTranslation},
        {translateY: yTranslation},
        {scaleX: xInterpolation},
        {scaleY: yInterpolation},
      ],
      zIndex: 100,
    };
  };

  render() {
    const bookMyShowTranslationStyle = this.getBookMyShowCardTranslation();
    const swiggyCardTranslation = this.getSwiggyCardTranslation();
    const zomatoCarTranslation = this.getZomatoCardTranslation();
    const dunzoCardTranslation = this.getDunzoCardTranslation();

    return (
      <View style={[CommonStyle.containerStyle, {zIndex: 3}]}>
        <MobileFrame>
          <View
            style={[CommonStyle.cardStyle, CommonStyle.transparentBackground]}>
            <Text>Rs. 500</Text>
          </View>

          <View style={CommonStyle.cardStyle}>
            <Text style={CommonStyle.cardTextStyle}>DEBIT CARD</Text>
          </View>

          <View style={{zIndex: 10}}>
            {/* *************************************
                      BOOK MY SHOW
            *****************************************/}
            <Animated.View
              style={[
                CommonStyle.scaledCardStyle,
                Styles.cardStyle,
                bookMyShowTranslationStyle,
                {position: 'absolute'},
              ]}>
              <Image
                source={R.Images.SimplLogo}
                style={[
                  CommonStyle.imageStyle,
                  {transform: [{scaleX: 1 / 1.4}, {scaleY: 1 / 1.2}]},
                ]}
                resizeMode="contain"
              />
            </Animated.View>

            {/* *************************************
                      SWIGGY
            *****************************************/}
            <Animated.View
              style={[
                CommonStyle.scaledCardStyle,
                Styles.cardStyle,
                swiggyCardTranslation,
                {position: 'absolute'},
              ]}>
              <Image
                source={R.Images.SimplLogo}
                style={[
                  CommonStyle.imageStyle,
                  {transform: [{scaleX: 1 / 1.4}, {scaleY: 1 / 1.2}]},
                ]}
                resizeMode="contain"
              />
            </Animated.View>

            {/* *************************************
                     ZOMATO
            *****************************************/}
            <Animated.View
              style={[
                CommonStyle.scaledCardStyle,
                Styles.cardStyle,
                zomatoCarTranslation,
                {position: 'absolute'},
              ]}>
              <Image
                source={R.Images.SimplLogo}
                style={[
                  CommonStyle.imageStyle,
                  {transform: [{scaleX: 1 / 1.4}, {scaleY: 1 / 1.2}]},
                ]}
                resizeMode="contain"
              />
            </Animated.View>

            {/* *************************************
                     DUNZO
            *****************************************/}
            <Animated.View
              style={[
                CommonStyle.scaledCardStyle,
                Styles.cardStyle,
                dunzoCardTranslation,
                {position: 'absolute'},
              ]}>
              <Image
                source={R.Images.SimplLogo}
                style={[
                  CommonStyle.imageStyle,
                  {transform: [{scaleX: 1 / 1.4}, {scaleY: 1 / 1.2}]},
                ]}
                resizeMode="contain"
              />
            </Animated.View>

            <View
              style={[
                CommonStyle.scaledCardStyle,
                Styles.cardStyle,
                {opacity: 0},
              ]}>
              <Image
                source={R.Images.SimplLogo}
                style={[
                  CommonStyle.imageStyle,
                  {transform: [{scaleX: 1 / 1.4}, {scaleY: 1 / 1.2}]},
                ]}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={[CommonStyle.cardStyle]}>
            <Text style={CommonStyle.cardTextStyle}>NET BANKING</Text>
          </View>

          <View style={CommonStyle.cardStyle}>
            <Text style={CommonStyle.cardTextStyle}>DEBIT CARD</Text>
          </View>
        </MobileFrame>
      </View>
    );
  }
}
