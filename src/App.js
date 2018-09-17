import React, { Component } from 'react';
import firebase from "firebase";
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';




class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAvRuf4L6VlJ-rEHOLL0E4ezcACPswjh_E',
    authDomain: 'auth-375b1.firebaseapp.com',
    databaseURL: 'https://auth-375b1.firebaseio.com',
    projectId: 'auth-375b1',
    storageBucket: 'auth-375b1.appspot.com',
    messagingSenderId: '949897531355'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false: 
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;