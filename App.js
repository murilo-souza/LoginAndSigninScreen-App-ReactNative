
import React from 'react';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './Screens/Signin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: '#35aaff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="Signin" component={Signin} options={{
          title: 'SignIn',
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: '#35aaff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


