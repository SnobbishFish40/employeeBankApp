import React from "react";
import LinearGradient from 'expo-linear-gradient';
import { Pressable } from "react-native";

function Days({ day }) {
  return (
    <Pressable onPress={nextPage}>
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
        
        >title={day}</Text> {/* Wrap text in a Text component */}
      </View>
      
    </LinearGradient>
    </Pressable>
    
  );
}

export default Days;