import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ListUsersStyles from './ListUsersStyles';
import UsersService from '../../services/UsersService';
import UserComponent from '../../components/user-component/UserComponent';

const ListUsersScreen = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const users = await UsersService.getUsers();
        console.log(users);
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);
    return <View style={ListUsersStyles.container}>
        <FlatList data={users} renderItem={({ item, index }) => <TouchableOpacity onPress={() => UsersService.getUser(item.id)}>
            <UserComponent id={item.id} user={item} position={index}></UserComponent>
        </TouchableOpacity>}>
        </FlatList>
    </View>
}

export default ListUsersScreen;


// import React from 'react';
// import {View, Text} from 'react-native';

// const ListUsers = () => {
//     return <View>
//         <Text>Lista de usuarios</Text>
//     </View>
// }

// export default ListUsers;