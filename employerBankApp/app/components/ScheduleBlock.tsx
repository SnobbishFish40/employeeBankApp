import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

type HomeScreenProps = {
  location: string;
  name: string;
};

const ScheduleBlock: React.FC<HomeScreenProps> = ({ name, location }) => {
  return (
    <LinearGradient
      colors={["#614879", "#E04678"]}
      start={{ x: 0, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Location: {location}</Text>
        <Text style={styles.text}>Employee: {name}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    padding: 10,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    height: 75,
    width: 300,
    marginTop: 10,
  },
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    textAlign: "center",
    color: '#fff',
    fontWeight: 'bold', // Use 'bold' for better clarity
  },
});

export default ScheduleBlock;
