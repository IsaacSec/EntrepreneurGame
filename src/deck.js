import React, { Component } from 'react'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Text,
  Button,
  Image
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = Dimensions.get('window').width * 0.4
const SWIPE_OUT_DURATION = 250

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props)

    this.leftOpacity = new Animated.Value(0)
    this.rightOpacity = new Animated.Value(0)

    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })

        gesture.dx > 0
          ? this.rightOpacity.setValue(Math.abs(gesture.dx) / 80)
          : this.leftOpacity.setValue(Math.abs(gesture.dx) / 80)
      },
      onPanResponderRelease: (event, gesture) => {
        this.rightOpacity.setValue(0)
        this.leftOpacity.setValue(0)

        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe(1)
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe(-1)
        } else {
          this.resetPosition()
        }
      }
    })
    this.state = { panResponder, position, index: 0 }
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props
    const item = data[this.state.index]

    direction === 1 ? onSwipeRight(item) : onSwipeLeft(item)
    this.setState({ index: this.state.index + 1 })
    this.state.position.setValue({ x: 0, y: 0 })
  }

  getCardStyle() {
    const { position } = this.state
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-90deg', '0deg', '90deg']
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
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
      duration: SWIPE_OUT_DURATION
    }).start(() => {
      this.onSwipeComplete(direction)
    })
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start()
  }

  renderCards() {
    const { props, state } = this
    const cardsLeft = state.index < props.data.length - 1
    const inLastCard = state.index === props.data.length - 2
    const item = props.data[state.index]
    const margin = 20
    const width = SCREEN_WIDTH - margin * 2

    return (
      <View>
        <View style={{ width: '100%', height: width + 40 }} />
        {cardsLeft ? (
          !inLastCard && (
            <View
              style={{
                width,
                height: width,
                margin,
                backgroundColor: 'white',
                borderRadius: 10,
                position: 'absolute',
                backgroundColor: '#1e2126',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={require('../res/images/zona-ei.png')}
                style={{ width: 200, height: 200, opacity: 0.25 }}
              />
            </View>
          )
        ) : (
          <View
            style={{
              width,
              height: width,
              margin,
              borderRadius: 10,
              position: 'absolute'
            }}>
            <Button
              title="Reset"
              tintColor="rgb(78, 175, 49)"
              style={{ color: 'rgb(78, 175, 49)' }}
              onPress={() => {
                this.setState({
                  index: 0
                })
              }}
            />
          </View>
        )}
        {cardsLeft && (
          <Animated.View
            style={[this.getCardStyle(), styles.cardStyle, { elevation: 4 }]}
            {...this.state.panResponder.panHandlers}>
            <View
              style={{
                width,
                height: width,
                margin,
                backgroundColor: 'white',
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'gray'
              }}
              key={item.id}
              title={item.text}
              image={{ uri: item.uri }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'relative',
                  backgroundColor: 'gray'
                }}>
                <Image
                  source={require('../res/images/1.png')}
                  style={{
                    width: width,
                    height: width,
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
                <Animated.View
                  style={{ opacity: this.rightOpacity, margin: 20 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      padding: 5,
                      color: 'white',
                      fontWeight: '700',
                      maxWidth: 170
                    }}>
                    {item.leftText}
                  </Text>
                </Animated.View>
                <Animated.View
                  style={{ opacity: this.leftOpacity, margin: 20 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      padding: 5,
                      color: 'white',
                      fontWeight: '700',
                      maxWidth: 170
                    }}>
                    {item.rightText}
                  </Text>
                </Animated.View>
              </View>
            </View>
          </Animated.View>
        )}
      </View>
    )
  }

  render() {
    return <View>{this.renderCards()}</View>
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
}

export default Deck
