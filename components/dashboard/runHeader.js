import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import { useState } from "react";
function RunHeader({ title, setShowClients }) {
    const [clicked, setClicked] = useState(false); 
  const toggleIcon = () => {
      setClicked(!clicked);
      setShowClients(!clicked);
  };
  return (
    <TouchableOpacity onPress={toggleIcon} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign
        name={clicked ? "caretup" : "caretdown"}
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between" ,
    flexDirection:"row",
    backgroundColor: "#1DA1F2",
    borderRadius: 8,
    marginHorizontal: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "#f0f0f0",
  },
});

export default RunHeader;
