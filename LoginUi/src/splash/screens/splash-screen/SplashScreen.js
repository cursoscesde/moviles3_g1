import React, {useEffect} from 'react';
import { Image, StatusBar, View, ActivityIndicator } from 'react-native';
import Colors from '../../../shared/colors/Colors';
import LinearGradient from 'react-native-linear-gradient';
import SplashStyles from './SplashStyles';

const SplashScreen = ({navigation}) => {
    const waitingTimeSplash = () =>{
        setTimeout(() =>{
            navigation.navigate('ListUsers');
        }, 3000);
    }
    useEffect(()=>{
        waitingTimeSplash();
    }, []);
    return (
        <View style={SplashStyles.container}>
            <StatusBar backgroundColor={Colors.primarycolor}></StatusBar>
            <LinearGradient
                colors={[Colors.primarycolor, Colors.secondaryColor]}
                style={SplashStyles.gradientContainer}>
                <StatusBar style={{ backgroundColor: "orange" }}></StatusBar>
                <Image source={require('./img/settings.png')} />
                <ActivityIndicator size="large" color="white"></ActivityIndicator>
            </LinearGradient>
        </View>
    )
}

export default SplashScreen;