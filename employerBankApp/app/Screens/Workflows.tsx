import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Workflows = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello</Text>
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
