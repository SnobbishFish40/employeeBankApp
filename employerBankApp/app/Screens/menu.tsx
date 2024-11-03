import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import MenuBlock from '../components/MenuBlock'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Menu: React.FC<HomeScreenProps> = ({ navigation }) => {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#614B79",
        margin:0,
      }}>

      <MenuBlock navigation={navigation} page='Schedules' name='Schedules'/>
      <MenuBlock navigation={navigation} page='Messages' name='Messages'/>
      <MenuBlock navigation={navigation} page='Workflows' name='Workflows'/>
      <MenuBlock navigation={navigation} page='Settings' name='Settings'/>


      

      
    </View>
  );
}

export default Menu;