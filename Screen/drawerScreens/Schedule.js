//This is an example code to show React Native Round Shape Image//
import React, { Component } from 'react';
//import react in our code. 

import { Platform, StyleSheet, View, Image, Text } from 'react-native';
//import all the components we are going to use. 


export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
        />
        <Text style={styles.text}>About React</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
  },
  text: {
    marginTop: 30,
    fontSize: 40,
    color: '#0250a3',
    fontWeight: 'bold',
  },
});