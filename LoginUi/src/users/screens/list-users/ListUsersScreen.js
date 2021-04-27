import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListUsersStyles from './ListUsersStyles';

const ListUsersScreen = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const jsonResponse = await response.json();
        setUsers(jsonResponse.data);
        // console.log(jsonResponse.data);
    }
    const Item = (props) =>{
        user = props.user;
        // position = props.position;
        console.log(props)
        return <Text>{user.first_name}</Text>
    }

   
    useEffect(()=>{
        getUsers();
    },[]);
    return <View style={ListUsersStyles.container}>
        <FlatList data={users} renderItem={({item, index}) => <Item user={item} position={index}></Item>}>

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