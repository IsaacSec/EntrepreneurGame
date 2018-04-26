/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';

import MenuView from './src/Views/MenuView';
import OptionsView from './src/Views/OptionsView';
import CardView from './src/Views/CardView';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { DecisionGraph } from './src/core/decisionGraph';
import {DATA, current} from './src/Views/CardView.js'
import { GameManager } from './src/core/gameManager';


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewId: 0,
      musicVolume: 80
    };

    game = new GameManager()
    first = game.decisionGraph.currentNode.getData()
    DATA[0].text = first.text
    DATA[0].leftText = first.leftText
    DATA[0].rightText = first.rightText
  }

  render() {
    return (
      this.renderViews()
    );
  }

  renderViews(){
    switch (this.state.viewId) {
      case 0: 
        return this.renderMenuView();
      case 1:
        return this.renderOptionsView();
      case 2: 
        return this.renderCardView();
      default: 
        return this.renderDefault(this.state.viewId);
    } 
  }

  renderMenuView(){
    return(
      <MenuView
        onPressPlay = {() => {
          this.setState( {viewId : 2} );
        }}
        onPressOptions = {() => { 
          this.setState( {viewId : 1} );
        }}
        onPressAbout = {() => {
          this.setState( {viewId : 10} );
        }}
      />
    );
  }

  renderCardView(){
    return (
      <CardView
        ref = {component => this._CardView = component}
        onSwipeRight = {() => {
          game.nextCard(DATA, true)
          this._CardView.setState({question: current.text})
        }}
        onSwipeLeft = {() => {
          game.nextCard(DATA, false)
          this._CardView.setState({question: current.text})
        }}
      />
    );
  }

  renderOptionsView(){
    return(
      <OptionsView
        onPressBack = {() => {
          this.setState( {viewId : 0} );
        }}
        onMusicVolumeChanged = {(value) => {
          this.setState( {musicVolume: value} );
        }}
      />
    );
  }

  renderDefault (value) {
    return(
      <View>
        <Text>
          No view defined
          ViewID = {""+value}
        </Text>
      </View>
    );
  }
}