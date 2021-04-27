
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import ListApartmentsScreen from './src/apartments/screens/list_apartments/ListApartmentsScreen';
import SplashScreen from './src/splash/screens/splash-screen/SplashScreen';
import ListUsersScreen from './src/users/screens/list-users/ListUsersScreen';

const Stack = createStackNavigator(); //inicializa la navegación

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="ListApartments" component={ListApartmentsScreen} />
        <Stack.Screen name="ListUsers" component={ListUsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
