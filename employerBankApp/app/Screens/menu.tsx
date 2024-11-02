import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Menu = () => {

  const[username, setUsername] = React.useState('');
  const[password, setPassword] = React.useState('');
  const[showPassword, setShowPassword] = React.useState(false)

  const logIn = () => {
    
    }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#614B79"
      }}
    >

      
        
    </View>
  );
}

export default Menu;