import React, {Component} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import Styles from './styles';

export declare interface Props {
  style?: ViewStyle;
  mobileScreenStyle?: ViewStyle;
}
export declare interface State {}

export default class MobileFrame extends Component<Props, State> {
  render() {
    const {style, mobileScreenStyle} = this.props;

    return (
      <View style={[Styles.containerStyle, style]}>
        <View style={Styles.earPieceStyle} />
        <View style={[Styles.mobileScreen, mobileScreenStyle]}>
          {/* top space = 90 till here */}
          {this.props.children}
        </View>
      </View>
    );
  }
}
