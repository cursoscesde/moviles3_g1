import React from 'react';
import { View, Text, StatusBar, Image, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';
const LoginScreen = () => {
    return <View style={Styles.container}>
        <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
        <LinearGradient colors={[Colors.primarycolor, Colors.secondaryColor]} style={Styles.logoContainer}>
            <Image source={require('./img/icon_login.png')} style={Styles.logo}></Image>
            <Text style={Styles.title}>Login</Text>
        </LinearGradient>
        <View style={Styles.inputDataContainer}>
            <TextInput placeholder="Email" style={Styles.inputData}></TextInput>
            <TextInput placeholder="Password" style={Styles.inputData}></TextInput>
            <Button title="Login"></Button>
            <TouchableOpacity>
                <LinearGradient style={Styles.loginButton} colors={[Colors.primarycolor, Colors.secondaryColor]}>
                    <Text>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
}
export default LoginScreen;
