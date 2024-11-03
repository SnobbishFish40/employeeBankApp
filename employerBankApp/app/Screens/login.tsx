import React from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Pressable, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Adjust the path to your image


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Login: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const logIn = () => {
    if (username && password) {
      navigation.navigate('menu'); 
      console.log('Clicked');
    } else {
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      width: '80%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#614B79',
    },
    title: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#E04678',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    logo: {
      width: 250, // Set the width of the logo
      height: 150, // Set the height of the logo
      marginBottom: 20, // Space below the logo
      borderRadius:10
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.png')} // Use the imported logo
        style={styles.logo} // Use the styles defined
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <Pressable style={styles.button} onPress={logIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default Login;
