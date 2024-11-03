import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuBlock from '../components/MenuBlock';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type ScheduleScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Workflows: React.FC<ScheduleScreenProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Projects</Text>
      <View style={styles.container}>
      <MenuBlock navigation={navigation} page='ProjectFlow' name='ProjectX'/>
      <MenuBlock navigation={navigation} page='ProjectFlow' name='Internal Tooling Project'/>
      <MenuBlock navigation={navigation} page='ProjectFlow' name='MortgageApp'/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#614B79',
  },
  greeting: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Workflows;
