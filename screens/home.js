// React Dependencies
import React, { Component } from 'react';
import { View, Text, Alert, AppState } from 'react-native';

export class Home extends Component {
  
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this._showAlert();
    }
    this.setState({appState: nextAppState});
  };


  _showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
      </View>
    )
  }
}

export default Home