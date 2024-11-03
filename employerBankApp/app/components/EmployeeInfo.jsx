import React from "react";
import { View, Text } from "react-native";

function EmployeeInfo({ location, employeeName }) {
  return (
    <View>
      <Text>{location}</Text>
      <Text>{employeeName}</Text>
    </View>
  );
}

export default EmployeeInfo;
