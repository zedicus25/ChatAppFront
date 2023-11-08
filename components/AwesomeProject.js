import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as SignalR from '@microsoft/signalr';

export default class AwesomeProject extends Component {

  componentDidMount() {
    const URL = 'http://bojom48927-001-site1.htempurl.com/chat';
    let connection = new SignalR.HubConnectionBuilder()
      .withUrl(URL)
      .build();
    connection.on('Receive', (arg1, arg2, arg3) => {
        console.log("Recive: " +arg1+" "+arg2+" "+ arg3)
    });
    connection.start()
    .then(() => {
        console.log("Connected")
        
        connection.invoke("Send", "Message")
    }).catch((error) => {
        console.log("Failed: "+error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);