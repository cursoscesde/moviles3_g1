import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import UserComponentStyles from './userComponentStyles';
const UserComponent = (props) => {
    user = props.user;
    return (
        <View style={UserComponentStyles.container}>
            <Image source={{ uri: user.avatar }}
                style={{ width: 200, height: 200 }} />
            <Text>{user.first_name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.id}</Text>
        </View>
    );
}
export default UserComponent;