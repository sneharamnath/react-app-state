// React Dependencies
import React, {useEffect, useState} from 'react';
import { Text, AppState, Alert } from 'react-native';


const Settings = () => {
  const [appState, setAppState] = useState(
    AppState.currentState
  );
  useEffect(() => {
    AppState.addEventListener('change', this._handleAppStateChange);
  });
  
  _handleAppStateChange = (nextAppState) => {
    if (
      appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this._showAlert();
    }
    setAppState(nextAppState)
  };
  return <Text>This is Notifications screen</Text>
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

export default Settings;