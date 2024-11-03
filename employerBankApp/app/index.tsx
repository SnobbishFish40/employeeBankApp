import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Screens/login'; // Make sure this path is correct
import menu from './Screens/menu'; // Make sure this path is correct
import Messages from './Screens/Messages';
import Workflows from './Screens/Workflows';
import Schedules from './Screens/Schedules';
import SchedulesSheet from './Screens/ScheduleSheet';
import ProjectFlow from './Screens/ProjectFlow';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="login" component={login}  options={{ headerShown: false }}/>
        <Stack.Screen name="menu" component={menu} options={{  headerTitle: 'Dashboard' }} />
        <Stack.Screen name="Messages" component={Messages} options={{  headerTitle: 'Messages' }}/>
        <Stack.Screen name="Schedules" component={Schedules} options={{  headerTitle: 'Schedule' }} />
        <Stack.Screen name="ScheduleSheet" component={SchedulesSheet} options={{  headerTitle: 'Team Schedule' }}/>
        <Stack.Screen name="Workflows" component={Workflows} options={{  headerTitle: 'Project Workflow' }}/>
        <Stack.Screen name="ProjectFlow" component={ProjectFlow} options={{  headerTitle: 'Project Flow' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
