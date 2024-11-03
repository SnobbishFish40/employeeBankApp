import React from "react";
import { Colours } from "./enumerators";
import {
  CustomButton,
  submitDates,
  formStyles,
  Dropdown,
} from "./FormComponents";
import { StyleSheet, Text, View } from "react-native";

// Define the ConfirmLocation functional component
function ConfirmLocation(): JSX.Element {
  return (
    <View style={styles.app}>
      <Text style={formStyles.titleText}>Confirm Location</Text>
      <View
        style={{
          backgroundColor: Colours.AtomPa,
          borderRadius: 10,
          marginTop: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <CustomButton
            title="<"
            onPress={submitDates}
            buttonStyle={[formStyles.arrowButton, { marginRight: 5 }]}
            textStyle={formStyles.boldedText}
          />
          <CustomButton
            title=">"
            onPress={submitDates}
            buttonStyle={[formStyles.arrowButton, { marginLeft: 5 }]}
            textStyle={formStyles.boldedText}
          />
          <Text style={[formStyles.h3Text, { paddingHorizontal: 40 }]}>
            Calendar Dates
          </Text>
          <CustomButton
            title="Today"
            onPress={submitDates}
            buttonStyle={formStyles.textButton}
            textStyle={formStyles.boldedText}
          />
        </View>
        <Text style={[formStyles.h6Text, { marginTop: 10 }]}>Days</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
            marginLeft: 60,
            marginRight: 60,
          }}
        >
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
            <View key={day} style={formStyles.buttonContainer}>
              <CustomButton
                title={day}
                onPress={submitDates}
                buttonStyle={formStyles.daysButton}
                textStyle={formStyles.text}
              />
            </View>
          ))}
        </View>
        <Text style={[formStyles.h6Text, { marginTop: 30 }]}>Location</Text>
        <View style={{ marginTop: 10 }}>
          <Dropdown />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <CustomButton
            title="Submit"
            onPress={submitDates}
            buttonStyle={formStyles.submitButton}
            textStyle={formStyles.boldedText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24, // Adjusted to use a number for TypeScript compatibility
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: 24, // Adjusted to use a number for TypeScript compatibility
    fontSize: 18, // Adjusted to use a number for TypeScript compatibility
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default ConfirmLocation;
