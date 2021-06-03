
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import UserScreen from './src/users/user/UserScreen';


const App = () => {
  const user = {
    id: "hola",
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  }
  
  return (
    <UserScreen data={user}></UserScreen>
  );
};

export default App;
