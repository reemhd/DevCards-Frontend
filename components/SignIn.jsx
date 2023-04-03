import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SignIn = () => {
  return (
    <View style={SignInStyle.center}>
      <Text style={SignInStyle.text}>SignIn will go here!</Text>
    </View>
  );
};

const SignInStyle = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

