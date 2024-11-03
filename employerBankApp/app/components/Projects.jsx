import React from "react";
import { View, Text } from "react-native";

function Projects({ description, employeeName, progress }) {
  return (
    <View>
      <Text>{description}</Text>
      <Text>{employeeName}</Text>
      <Text>{progress}</Text>
    </View>
  );
}

export default Projects;