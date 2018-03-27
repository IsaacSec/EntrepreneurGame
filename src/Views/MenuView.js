import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class App extends Component {
  
  render() {
    
    const { 
      onPressPlay, 
      onPressOptions, 
      onPressAbout 
    } = this.props;

    return (

      <View style={styles.container}>
        <View style={styles.menu_container}>

          <Image
            source={require('../../assets/images/office.png')}
            style={styles.menu_game_icon}/>
          
          <View style={styles.menu_top_button_container}>
            <Button
              title="Play"
              onPress={ onPressPlay }
              color='#9AC24D'
            />
          </View>
          
          <View style={styles.menu_middle_button_container}>
            <Button
              title="Options"
              onPress={ onPressOptions }
              color='#A3A9B1'
            />
          </View>

          <View style={styles.menu_bot_button_container}>
            <Button
              title="About"
              onPress={ onPressAbout }
              color='#A3A9B1'
            />
          </View>
        
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#333740',
  },
  menu_container: {
    width: '70%',
    height: '90%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menu_game_icon: {
    marginTop: '15%',
    alignItems: 'center',
    height: '40%',
    resizeMode: 'contain'
  },
  menu_button_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },

  menu_top_button_container: {
    width: '70%',
    marginTop: '20%',
  },

  menu_middle_button_container: {
    width: '70%',
    marginTop: '8%',
    marginBottom: '8%',
  },

  menu_bot_button_container: {
    width: '70%',
  },

  menu_play_button: {
  },
  menu_generic_button: {
  }
});