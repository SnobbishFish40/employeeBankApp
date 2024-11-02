import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import MenuBlock from '../components/MenuBlock'

import Login from './login';
const Menu = () => {

  const logIn = () => {
    
    }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#614B79",
        margin:0,
      }}>

      <MenuBlock Name={Login}/>
      <MenuBlock Name={"Progress tracker"}/>
      <MenuBlock Name={"Messages"}/>
      <MenuBlock Name={"Subscriptions"}/>
      <MenuBlock Name={"Mental check in"}/>
      <MenuBlock Name={"Settings"}/>

      

      
    </View>
  );
}

export default Menu;