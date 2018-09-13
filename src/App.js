import React, { Component } from 'react';
import firebase from "firebase";
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';




class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAvRuf4L6VlJ-rEHOLL0E4ezcACPswjh_E',
    authDomain: 'auth-375b1.firebaseapp.com',
    databaseURL: 'https://auth-375b1.firebaseio.com',
    projectId: 'auth-375b1',
    storageBucket: 'auth-375b1.appspot.com',
    messagingSenderId: '949897531355'
    });
  }
  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }
}

export default App;