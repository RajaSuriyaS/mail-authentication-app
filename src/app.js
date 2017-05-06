import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
apiKey: 'AIzaSyC2hoE6GuKA7d8NBoodN41GFhUSZ8iI-_0',
authDomain: 'auth-7f9d9.firebaseapp.com',
databaseURL: 'https://auth-7f9d9.firebaseio.com',
projectId: 'auth-7f9d9',
storageBucket: 'auth-7f9d9.appspot.com',
messagingSenderId: '977530417451'
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
        <CardSection>
       <Button onPress={() => firebase.auth().signOut()}>
       Log out
       </Button>
       </CardSection>
     );
  case false:
       return <LoginForm />;
  default:
        return <Spinner size='large' />;
}
}

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
