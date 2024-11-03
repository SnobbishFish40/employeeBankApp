import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuBlock from '../components/MenuBlock';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ScheduleScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Schedules: React.FC<ScheduleScreenProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <MenuBlock navigation={navigation} page='ScheduleSheet' name='Monday'/>
      <MenuBlock navigation={navigation} page='ScheduleSheet' name='Tueaday'/>
      <MenuBlock navigation={navigation} page='ScheduleSheet' name='Wednesday'/>
      <MenuBlock navigation={navigation} page='ScheduleSheet' name='Thursday'/>
      <MenuBlock navigation={navigation} page='ScheduleSheet' name='Friday'/>
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

export default Schedules;
