/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Slider
} from 'react-native';


export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { 
        onPressBack,
        onMusicVolumeChanged
    } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={styles.back_button_container}>
          <Button
            style={styles.back_button}
            title='Back' 
            onPress={onPressBack}/>
        </View>
        <View style={styles.sub_container}>
          <View style={styles.slider_container}>
            <Text style={styles.slider_text}>Music Volume</Text>
            <Slider style={styles.slider_input}
              value={80}
              minimumValue={0}
              maximumValue={100}
              onValueChange={onMusicVolumeChanged}
              maximumTrackTintColor='#9BC34D'
              minimumTrackTintColor='#9BC34D'
              thumbTintColor='#76954E'/>
          </View>
          <View style={styles.slider_container}>
            <Text style={styles.slider_text}>Sound FX Volume</Text>
            <Slider style={styles.slider_input}
              value={80}
              minimumValue={0}
              maximumValue={100}
              maximumTrackTintColor='#9BC34D'
              minimumTrackTintColor='#9BC34D'
              thumbTintColor='#76954E'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#333740',
    },
    
    back_button_container: {
      width: '20%',
      marginTop: '5%',
      marginLeft: '5%',
    },
    back_button: {
    },

    sub_container: {
      marginTop: '20%',
      alignItems: 'center',
    },
    slider_container: {
      width:'70%'
    },
    slider_input: {
      width: '100%',
      marginTop: '10%',
      marginBottom: '10%'
    },
    slider_text: {
      marginLeft: '5%',
      fontFamily: 'Cochin',
      fontSize: 20,
      color: '#FAFAFB',
    }
  });