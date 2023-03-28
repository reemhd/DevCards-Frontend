import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={NavBarStyle.container}>
      <View>
        <MaterialIcons name="add-box" size={24} color="black" />
      </View>
    </View>
  );
};

const NavBarStyle = StyleSheet.create({
  container: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 75,
    borderWidth: 5,
    borderColor: "#9381FF",
  },
});

export default NavBar;
