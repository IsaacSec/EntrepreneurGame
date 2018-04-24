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
  View
} from 'react-native'
import { Card, Button } from 'react-native-elements'
import Deck from '../deck'

var DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
]

type Props = {};
export default class CardView extends Component<Props> {

    constructor(props) {
        super(props);
    }

  renderCard(item) {
    return (
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri}}
        >
        <Text style= {{marginBottom:10}}>
          I can customize the Card further
        </Text>
        <Button
          icon={{name:'code'}}
          backgroundColor='#03A9F4'
          title= {'View Now!'}
        >
        </Button>
        </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card
        title= 'Game Over!'
      >
      <Text style= {{ marginBottom:10, textAlign: 'center' }}>
        Score: 89321 points
      </Text>
      <Button
        icon={{name:'code'}}
        backgroundColor='#03A9F4'
        title= {'Try Again!'}
      >
      </Button>
      </Card>
    )
  }

  render() {
    return (
            <View style={styles.container}>
            
                <Deck
                data={DATA}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  }
});

export {DATA};