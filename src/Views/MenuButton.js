import React, { Component } from 'react'
import {
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

export default class MenuButton extends Component {
  constructor(props) {
    super(props)
    this.state = { pressStatus: false }
  }
  _onHideUnderlay() {
    this.setState({ pressStatus: false })
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true })
  }

  render() {
    const { onPress, title } = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={onPress}
          activeOpacity={1}
          style={this.state.pressStatus ? styles.buttonPress : styles.button}
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}>
          <Text style={this.state.pressStatus ? styles.textPress : styles.text}>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#D3E7EB',
    backgroundColor: '#9ABF7F'
  },
  textPress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#D3E7EB'
  },
  button: {
    elevation: 5,
    backgroundColor: '#9ABF7F'
  },
  buttonPress: {
    backgroundColor: '#7FA678'
  }
})
