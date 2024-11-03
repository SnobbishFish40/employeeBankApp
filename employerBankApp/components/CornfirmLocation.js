import React, { useState } from "react";
import { Colours } from "./enumerators.js";

import {
  CustomButton,
  submitDates,
  formStyles,
  Dropdown,
} from "./FormComponents.js";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function ConfirmLocation() {
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
          <View style={formStyles.buttonContainer}>
            <CustomButton
              title="Mon"
              onPress={submitDates}
              buttonStyle={formStyles.daysButton}
              textStyle={formStyles.text}
            />
          </View>
          <View style={formStyles.buttonContainer}>
            <CustomButton
              title="Tue"
              onPress={submitDates}
              buttonStyle={formStyles.daysButton}
              textStyle={formStyles.text}
            />
          </View>
          <View style={formStyles.buttonContainer}>
            <CustomButton
              title="Wed"
              onPress={submitDates}
              buttonStyle={formStyles.daysButton}
              textStyle={formStyles.text}
            />
          </View>
          <View style={formStyles.buttonContainer}>
            <CustomButton
              title="Thu"
              onPress={submitDates}
              buttonStyle={formStyles.daysButton}
              textStyle={formStyles.text}
            />
          </View>
          <View style={formStyles.buttonContainer}>
            <CustomButton
              title="Fri"
              onPress={submitDates}
              buttonStyle={formStyles.daysButton}
              textStyle={formStyles.text}
            />
          </View>
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
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
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

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default ConfirmLocation;
