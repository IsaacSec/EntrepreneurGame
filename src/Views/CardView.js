/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import Deck from '../deck'

var DATA = [
  {
    id: 0,
    text: 'Card #1',
    leftText: 'left text',
    rightText: 'right text'
  },
  {
    id: 1,
    text: 'Card #2',
    leftText: 'left text',
    rightText: 'right text'
  },
  {
    id: 2,
    text: 'Card #3',
    leftText: 'left text',
    rightText: 'right text'
  }
]

var current = DATA[0]

type Props = {}
export default class CardView extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      question: current.text
    }
  }

  updateQuestion = () => {
    this.setState({question: current.text})
  }

  renderCard(item) {
    this.updateQuestion()
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further
        </Text>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="Game Over!">
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>
          Score: 89321 points
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title={'Try Again!'}
        />
      </Card>
    )
  }

  render() {
    console.log("Render", current.text)
    const { onSwipeRight, onSwipeLeft } = this.props
    return (
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 120,
            paddingTop: 20,
            backgroundColor: '#1f2128',
            marginBottom: 30
          }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'gray',
                marginBottom: 10
              }}
            />
            <Text style={{ color: 'white', fontWeight: '700' }}>{1234}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'gray',
                marginBottom: 10
              }}
            />
            <Text style={{ color: 'white', fontWeight: '700' }}>{1234}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'gray',
                marginBottom: 10
              }}
            />
            <Text style={{ color: 'white', fontWeight: '700' }}>{1234}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'gray',
                marginBottom: 10
              }}
            />
            <Text style={{ color: 'white', fontWeight: '700' }}>{1234}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
          }}>
          <Text style={{ color: 'white' }}> {this.state.question} </Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <Deck data={DATA} onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft} onReset={() => {}} />
        </View>
        <View
          style={{
            backgroundColor: '#1f2128',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}>2018</Text>
          <Text style={{ color: 'white' }}>FECHA</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333740'
  }
})

export { DATA, current }
