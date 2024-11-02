import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
  });

  return (
    <View style={styles.container}>
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
      <Button
        title={showPassword ? 'Hide Password' : 'Show Password'}
        onPress={() => setShowPassword(prev => !prev)}
      />
      <Button title="Log In" onPress={logIn} />
    </View>
  );
}

export default Login;
