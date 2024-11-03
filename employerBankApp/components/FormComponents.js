const {
    View,
    TouchableOpacity,
    Pressable,
    Text,
    StyleSheet,
  } = require("react-native");
  import { Colours } from "./enumerators.js";
  import React, { useState } from "react";
  
  export function Dropdown() {
    const [selectedOption, setSelectedOption] = useState(
      "Select expected working location"
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const options = ["Office", "WFH"];
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };
  
    return (
      <View style={formStyles.container}>
        {/* Dropdown Button */}
        <TouchableOpacity
          style={formStyles.dropdownButton}
          onPress={toggleDropdown}
        >
          <Text style={formStyles.text}>{selectedOption}</Text>
        </TouchableOpacity>
  
        {/* Dropdown Options */}
        {isDropdownOpen && (
          <View style={formStyles.dropdownOptions}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={formStyles.option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={formStyles.text}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  }
  export function submitDates() {
    console.log("Button pressed");
  }
  
  export function CustomButton({ onPress, title, buttonStyle, textStyle }) {
    return (
      <Pressable onPress={onPress} style={[formStyles.button, buttonStyle]}>
        <Text style={(formStyles.text, textStyle)}>{title}</Text>
      </Pressable>
    );
  }
  
  export const baseStyles = StyleSheet.create({
    button: {
      backgroundColor: Colours.White,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: Colours.AtomPa,
      alignSelf: "center",
    },
    text: {
      color: Colours.AtomDp,
      fontSize: 16,
    },
    header: {
      color: Colours.AtomDp,
      fontSize: 16,
      alignSelf: "center",
      fontWeight: "bold",
    },
  });
  
  export const formStyles = StyleSheet.create({
    submitButton: {
      ...baseStyles.button,
      paddingVertical: 10,
      paddingHorizontal: 50,
    },
    arrowButton: {
      ...baseStyles.button,
      paddingVertical: 2,
      paddingHorizontal: 10,
    },
    textButton: {
      ...baseStyles.button,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    daysButton: {
      ...baseStyles.button,
      paddingVertical: 5,
      paddingHorizontal: 0,
      alignSelf: "strech",
    },
    text: {
      ...baseStyles.text,
    },
    boldedText: {
      ...baseStyles.text,
      fontWeight: "bold",
    },
    titleText: {
      ...baseStyles.header,
      fontSize: 34,
    },
    h2Text: {
      ...baseStyles.header,
      fontSize: 32,
    },
    h3Text: {
      ...baseStyles.header,
      fontSize: 26,
    },
    h4Text: {
      ...baseStyles.header,
      fontSize: 22,
    },
    h5Text: {
      ...baseStyles.header,
      fontSize: 20,
    },
    h6Text: {
      ...baseStyles.header,
      fontSize: 18,
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: 10,
    },
    container: {
      alignItems: "center",
    },
    dropdownButton: {
      width: 250,
      padding: 10,
      backgroundColor: Colours.White,
      borderRadius: 5,
      alignItems: "center",
    },
    dropdownOptions: {
      width: 250,
      backgroundColor: "#FFFFFF",
      borderColor: "#C0C0C0",
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 5,
      alignItems: "center",
    },
    option: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    },
    optionText: {
      fontSize: 16,
      color: "#333",
    },
    textInput: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#cccccc",
      backgroundColor: "#ffffff",
      fontSize: 16,
      height: 100,
      textAlignVertical: "top",
      color: Colours.AtomDp,
    },
  });
  