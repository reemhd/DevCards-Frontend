import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={NavBarStyle.container}>
      <Pressable>
        <MaterialIcons name="home" size={30} color="black" />
      </Pressable>
      <Pressable>
        <MaterialIcons name="analytics" size={30} color="black" />
      </Pressable>
      <Pressable>
        <MaterialIcons name="add-box" size={30} color="black" />
      </Pressable>
      <Pressable>
        <Ionicons name="trophy-sharp" size={30} color="black" />
      </Pressable>
      <Pressable>
        <FontAwesome5 name="user-alt" size={30} color="black" />
      </Pressable>
    </View>
  );
};

const NavBarStyle = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 75,
    borderWidth: 5,
    borderColor: "#9381FF",
    backgroundColor: "#9381FF",
    flexDirection: "row",
    justifyContent: "space-around",
    // flex: 1,
  },
});

export default NavBar;
