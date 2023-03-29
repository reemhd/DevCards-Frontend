import React from "react";
import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const CreateCard = ({ label }) => {
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  return (
    <View style={cardStyles.container}>
      <Text style={label}>Front: </Text>
      <TextInput
        style={cardStyles.inputBox}
        placeholder="Enter your question here"
        value={cardFront}
        onChangeText={(text) => setCardFront(text)}
      />
      <Text style={label}>Back: </Text>
      <TextInput
        style={cardStyles.inputBox}
        placeholder="Enter your answer here"
        value={cardBack}
        onChangeText={(text) => setCardBack(text)}
      />
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    margin: 50,
    padding: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
});

export default CreateCard;
