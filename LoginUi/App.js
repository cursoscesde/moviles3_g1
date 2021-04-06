import React from 'react';
import { View, Image, StatusBar, TextInput} from 'react-native';
import Styles from './styles';
const App = () => {
  return <View style={Styles.container}>
    <StatusBar backgroundColor="#F3671C"></StatusBar>
    <View style={Styles.iconContainer}>
      <Image source={require('./img/icon_login.png')} />
    </View>
    <View style={Styles.inputDatacontainer}>
      <TextInput style={Styles.inputDataUser} placeholder="Email"></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Password"></TextInput>
    </View>
  </View>
}

export default App;

