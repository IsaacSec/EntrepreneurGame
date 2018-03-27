import React, { Component } from 'react'
import { View, Animated, PanResponder, Dimensions, LayoutAnimation,
UIManager } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = Dimensions.get('window').width * 0.40
const SWIPE_OUT_DURATION = 250

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }
  constructor(props) {
    super(props)
    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe(1)
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe(-1)
        } else {
          this.resetPosition()
        }
      },
    })
    this.state = { panResponder, position, index: 0 }
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props
    const item = data[this.state.index]

    direction === 1 ? onSwipeRight(item) : onSwipeLeft(item)
    this.setState({ index: this.state.index+1 })
    this.state.position.setValue({ x:0, y:0 })
  }

  getCardStyle() {
    const { position } = this.state
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-90deg', '0deg', '90deg'],
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    }
  }
  // Fix deck animation
  // https://www.udemy.com/react-native-advanced/learn/v4/questions/2265118
  // componentWillUpdate(){
  //   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  //   LayoutAnimation.spring()
  // }

  forceSwipe(direction) {
    Animated.timing(this.state.position, {
      toValue: { x: SCREEN_WIDTH * 2 * direction, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => { this.onSwipeComplete(direction) })
  }


  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start()
  }

  renderCards() {
    if (this.state.index >= this.props.data.length){
      return this.props.renderNoMoreCards()
    }

    return this.props.data.map((item, index) => {
      if (index < this.state.index) { return null }
      if (index === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={ [this.getCardStyle(), styles.cardStyle, {elevation: 4}]}
            {... this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        )
      }
      return (
        <Animated.View
        key={item.id}
        style={[styles.cardStyle, { top: 5 * (index - this.state.index) } ]}>
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse()
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
}

export default Deck
