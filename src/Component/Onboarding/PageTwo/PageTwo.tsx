import React from 'react';
import {View, Image, Animated, ViewStyle, ImageStyle} from 'react-native';
import CommonStyle from '../styles';
import Theme from '../../../utils/Theme';
import MobileFrame from '../../MobileFrame/MobileFrame';
import Styles from './styles';
import {R} from '../../../utils/R';

export declare interface Props {
  scrollAnimated: Animated.Value;
}
export declare interface State {}

export default class pageTwo extends React.Component<Props, State> {
  getScrollAnimatingStyle = (): Animated.WithAnimatedObject<ViewStyle> => {
    const {scrollAnimated} = this.props;

    const translationInterpolation = scrollAnimated.interpolate({
      inputRange: [0, Theme.Window.width, 2 * Theme.Window.width],
      outputRange: [0, 0, (1 / 0.6) * Theme.Window.width], // 0.6 being the x scale of the view..
    });

    return {transform: [{translateX: translationInterpolation}]};
  };

  getBookMyShowAnimatingStyle = (): Animated.WithAnimatedValue<ImageStyle> => {
    const initialTopPosition = 44;
    const finalTopPostiion = 2 * 150;

    const {scrollAnimated} = this.props;

    const translateY = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, -(initialTopPosition - finalTopPostiion)],
    });

    const translateX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, 1.5 * R.Theme.Window.width + 160],
    });

    const scaleX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [2, 2, 1.8],
    });

    return {
      transform: [{translateY}, {translateX}, {scaleY: 2}, {scaleX}],
    };
  };

  getSwiggyAnimatingStyle = (): Animated.WithAnimatedValue<ImageStyle> => {
    const initialTopPosition = 60;
    const finalTopPostiion = 2 * 200;

    const {scrollAnimated} = this.props;

    const translateY = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, -(initialTopPosition - finalTopPostiion)],
    });

    const translateX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, R.Theme.Window.width + 20],
    });

    const scaleX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [1.5, 1.5, 1.5],
    });

    return {
      transform: [{translateY}, {translateX}, {scaleY: 1.5}, {scaleX}],
    };
  };

  getZomatoAnimatingStyle = (): Animated.WithAnimatedValue<ImageStyle> => {
    const initialTopPosition = 44 + 0.5 * Theme.Window.height;
    const finalTopPostiion = 310;

    const {scrollAnimated} = this.props;

    const translateY = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, -(initialTopPosition - finalTopPostiion)],
    });

    const translateX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, 1.5 * R.Theme.Window.width + 150],
    });

    const scaleX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [3, 3, 2.5],
    });

    return {
      transform: [{translateY}, {translateX}, {scaleY: scaleX}, {scaleX}],
      zIndex: 101,
    };
  };

  getDunzoAnimatingStyle = (): Animated.WithAnimatedValue<ImageStyle> => {
    const initialTopPosition = 44 + 0.5 * Theme.Window.height;
    const finalTopPostiion = 420;

    const {scrollAnimated} = this.props;

    const translateY = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, -(initialTopPosition - finalTopPostiion)],
    });

    const translateX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [0, 0, R.Theme.Window.width + 30],
    });

    const scaleX = scrollAnimated.interpolate({
      inputRange: [0, R.Theme.Window.width, 2 * R.Theme.Window.width],
      outputRange: [1.5, 1.5, 1.7],
    });

    return {
      transform: [{translateY}, {translateX}, {scaleY: scaleX}, {scaleX}],
    };
  };

  render() {
    const bookMyShowAnimatingStyle = this.getBookMyShowAnimatingStyle();
    const swiggyAnimatingStyle = this.getSwiggyAnimatingStyle();
    const zomatoAnimatingStyle = this.getZomatoAnimatingStyle();
    const dunzoAnimatingStyle = this.getDunzoAnimatingStyle();

    return (
      <View style={[CommonStyle.containerStyle, Styles.containerStyle]}>
        <View style={Styles.singleRowStyle}>
          {/* ********************************
              BOOK MY SHOW
            *******************************/}
          <View style={[Styles.mobileContainerFirst, {zIndex: 5}]}>
            <MobileFrame>
              <View style={[CommonStyle.cardStyle, Styles.iconsContainer]}>
                <Animated.Image
                  source={R.Images.BookMyShowLogo}
                  style={[CommonStyle.imageStyle, bookMyShowAnimatingStyle]}
                  resizeMode="contain"
                />
              </View>
              <View style={CommonStyle.cardStyle} />
              <View
                style={[
                  CommonStyle.scaledCardStyle,
                  {backgroundColor: 'transparent'},
                ]}
              />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
            </MobileFrame>
          </View>

          {/* ********************************
              SWIGGY
            *******************************/}
          <View style={Styles.mobileContainerFirst}>
            <MobileFrame>
              <View style={[CommonStyle.cardStyle, Styles.iconsContainer]}>
                <Animated.View style={swiggyAnimatingStyle}>
                  <Image
                    source={R.Images.SwiggyLogo}
                    style={[CommonStyle.imageStyle]}
                    resizeMode="contain"
                  />
                </Animated.View>
              </View>
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <Animated.View
                style={[CommonStyle.scaledCardStyle, Styles.hidden]}
              />
            </MobileFrame>
          </View>
        </View>

        <View style={[Styles.singleRowStyle]}>
          {/* ********************************
             ZOMATO
            *******************************/}
          <View style={[Styles.mobileContainerFirst, {zIndex: 5}]}>
            <MobileFrame>
              <View style={[CommonStyle.cardStyle, Styles.iconsContainer]}>
                <Animated.Image
                  source={R.Images.ZomatoLogo}
                  style={[CommonStyle.imageStyle, zomatoAnimatingStyle]}
                  resizeMode="contain"
                />
              </View>
              <View style={[CommonStyle.scaledCardStyle, Styles.hidden]} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
            </MobileFrame>
          </View>

          {/* ********************************
             DUNZO
            *******************************/}
          <View style={Styles.mobileContainerFirst}>
            <MobileFrame>
              <View style={[CommonStyle.cardStyle, Styles.iconsContainer]}>
                <Animated.Image
                  source={R.Images.DunzoLogo}
                  style={[CommonStyle.imageStyle, dunzoAnimatingStyle]}
                  resizeMode="contain"
                />
              </View>
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
              <View style={[CommonStyle.scaledCardStyle, Styles.hidden]} />
              <View style={CommonStyle.cardStyle} />
              <View style={CommonStyle.cardStyle} />
            </MobileFrame>
          </View>
        </View>
      </View>
    );
  }
}
