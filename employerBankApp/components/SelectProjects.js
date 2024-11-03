import {
    Image,
    Pressable,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
  } from "react-native";
  import { Colours } from "./enumerators.js";
  import React, { useState } from "react";
  
  import {
    CustomButton,
    submitDates,
    formStyles,
  } from "./FormComponents.js";
  
  function Textbox() {
    const [text, setText] = useState("");
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <View style={formStyles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter what you are working on..."
          style={formStyles.textInput}
          multiline
          scrollEnabled
        />
      </View>
    );
  }
  
  function Dropdown() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const options = ["Project1", "Project2", "Project3", "Project4"];
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (option) => {
      if (selectedOptions.includes(option)) {
        // If the option is already selected, remove it from the array
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        // If the option is not selected, add it to the array
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  
    return (
      <View style={formStyles.container}>
        {/* Dropdown Button */}
        <TouchableOpacity
          style={formStyles.dropdownButton}
          onPress={toggleDropdown}
        >
          <Text style={formStyles.text}>
            {selectedOptions.length > 0
              ? selectedOptions.join(", ") // Display selected options
              : "Select expected current projects"}
          </Text>
        </TouchableOpacity>
  
        {/* Dropdown Options */}
        {isDropdownOpen && (
          <View style={formStyles.dropdownOptions}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  formStyles.option,
                  selectedOptions.includes(option) && formStyles.selectedOption, // Apply a different style for selected options
                ]}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={formStyles.text}>
                  {selectedOptions.includes(option) ? "✓ " : ""}
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  }
  
  function SelectProjects() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={formStyles.titleText}>Confirm projects</Text>
          <View
            style={{
              backgroundColor: Colours.AtomPa,
              borderRadius: 10,
              marginTop: 10,
              paddingHorizontal: 50,
            }}
          >
            <Text
              style={[
                formStyles.h4Text,
                { paddingHorizontal: 40, marginTop: 10, marginBottom: 10 },
              ]}
            >
              Select the project
            </Text>
  
            <Dropdown />
  
            <Text style={[formStyles.h6Text, { marginTop: 20 }]}>Location</Text>
            <View style={{ marginTop: 10 }}></View>
            <Textbox />
  
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
  
  export default SelectProjects;
  