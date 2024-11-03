import React from "react";
import LinearGradient from 'expo-linear-gradient';
import { Pressable, View, Text } from "react-native";

function Projects({ description, employeeName, progress }) {
  return (
    <Pressable>
        <LinearGradient
      colors={["#614879", "#E04678"]}
      start={{ x: 0, y: 0 }}
      style={{ padding: 10,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 5,
        height:75,
        marginTop:10
        
       }}
    >
      <View
        style={{
          width: 300,
          padding: 10,
        }}
        
      >
        <Text
        
        style={{
          textAlign: "center",
          color:'#fff',
          fontWeight:500
        }}
        
        >{description}</Text> {/* Wrap text in a Text component */}

        <Text
        
        style={{
          textAlign: "center",
          color:'#fff',
          fontWeight:500
        }}
        
        >{employeeName}</Text> {/* Wrap text in a Text component */}

        <Text
          style={{
            textAlign: "center",
            color:'#fff',
            fontWeight:500
          }}
        
        >{progress}</Text> {/* Wrap text in a Text component */}
        
      </View>
      
    </LinearGradient>
  </Pressable>
  )
};


export default Projects;