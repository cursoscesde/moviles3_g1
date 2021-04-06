import React from 'react';
import { View, StyleSheet, Image, StatusBar, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
const App = () => {
  return <View style={Styles.container}>
    <StatusBar backgroundColor="#F3671C"></StatusBar>
    <View style={Styles.iconContainer}>
      <Image source={require('./img/icon_login.png')} />
    </View>
    <View style={Styles.inputDatacontainer}>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
    </View>
  </View>
}

export default App;

