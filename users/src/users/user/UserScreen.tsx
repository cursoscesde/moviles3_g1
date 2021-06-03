
import React, { FC } from 'react';
import {
    View,
    Text,
    ImageStore
} from 'react-native';
import { IUser } from '../interfaces/IUser';

const UserScreen = ({ data }: IUser) => {
    console.log(data);
    return (
        <View>
            <Text>Hola</Text>
        </View>
    );
};

export default UserScreen;
