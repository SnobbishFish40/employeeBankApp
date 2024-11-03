import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';

type ProjectBlockProps = {
  description: string;
  employee: string;
  progress: number; // Progress as a percentage
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({ description, employee, progress }) => {
  return (
    <LinearGradient
      colors={["#614879", "#E04678"]}
      start={{ x: 0, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Description: {description}</Text>
        <Text style={styles.text}>Employee: {employee}</Text>
        <Text style={styles.text}>Progress: {progress}%</Text>
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
    height: 130, // Increased height for better layout
    width: 300, // Adjust width as needed
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
    fontWeight: 'bold',
    marginVertical: 5, // Add vertical spacing between text elements
  },
});

export default ProjectBlock;
