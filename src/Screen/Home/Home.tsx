import React from 'react';
import {ScrollView, View, Animated} from 'react-native';
import {PageOne, PageTwo, PageThree} from '../../Component';
import Styles from './styles';
import Theme from '../../utils/Theme';

export declare interface Props {}
export declare interface State {
  animation: Animated.Value;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      animation: new Animated.Value(0),
    };
  }

  render() {
    const {animation} = this.state;

    return (
      <View style={Styles.containerStyle}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          bounces={false}
          horizontal
          pagingEnabled={true}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animation}}}],
            {useNativeDriver: true},
          )}>
          <PageOne scrollAnimated={animation} />
          <PageTwo scrollAnimated={animation} />
          <PageThree scrollAnimated={animation} />
        </Animated.ScrollView>
      </View>
    );
  }
}
