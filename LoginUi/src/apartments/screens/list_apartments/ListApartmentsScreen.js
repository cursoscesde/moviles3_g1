import React from 'react';
import {View, Text, Button} from 'react-native';

const ListApartmentsScreen = ({navigation}) =>{

    const goToLogin = () =>{
        navigation.navigate('Login');
    }
    return (
        <View>
            <Text>List Apartments works</Text>
            <Button title="Go to Login" onPress={()=>goToLogin()}></Button>
        </View>
    );
}

export default ListApartmentsScreen;