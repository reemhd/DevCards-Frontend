import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";

const CreateDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const handleCreateDeck = () => {
    //sends the name and description to backend
    //use the api.js function
    console.log("created");
  };

  return (
    <View style={createDeckStyles.container}>
      <Text style={createDeckStyles.label}>Name: </Text>
      <TextInput
        placeholder="Enter Deck Name"
        value={deckName}
        onChangeText={(text) => {
          setDeckName(text);
        }}
      />
      <Text style={createDeckStyles.label}>Description: </Text>
      <TextInput
        placeholder="Enter Deck Description"
        value={deckDescription}
        onChangeText={(text) => setDeckDescription(text)}
      />
      <TouchableOpacity onPress={handleCreateDeck}>
        <Text style={createDeckStyles.label}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

const createDeckStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 250,
  },
  label: {
    fontWeight: "bold",
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
  },
});

export default CreateDeck;
