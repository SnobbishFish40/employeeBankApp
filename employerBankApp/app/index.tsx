import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Screens/login'; // Make sure this path is correct
import menu from './Screens/menu'; // Make sure this path is correct
import Messages from './Screens/Messages';
import Workflows from './Screens/Workflows';
import Schedules from './Screens/Schedules';
import SchedulesSheet from './Screens/ScheduleSheet';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='login'>
        
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Schedules" component={Schedules} />
        <Stack.Screen name="SchedulesSheet" component={SchedulesSheet} />

        <Stack.Screen name="Workflows" component={Workflows} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
