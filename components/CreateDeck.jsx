import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import CreateCard from "./CreateCard";

const CreateDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const [showCreateCard, setShowCreateCard] = useState(false);

  //we need to reset the input boxes to blank AND make sure that showCreateCard is false

  const handleCreateDeck = () => {
    //sends the name and description to backend
    //use the api.js function
    console.log("created");
    setShowCreateCard(true);
  };

  return (
    <View style={createDeckStyles.container}>
      {!showCreateCard ? (
        <>
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
        </>
      ) : (
        <CreateCard label={createDeckStyles.label} />
      )}
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
