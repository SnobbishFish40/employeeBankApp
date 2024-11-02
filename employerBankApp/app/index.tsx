import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Screens/login'; // Make sure this path is correct
import menu from './Screens/menu'; // Make sure this path is correct

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='login'>
        
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="menu" component={menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
