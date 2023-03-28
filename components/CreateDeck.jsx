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
          <View style={createDeckStyles.label}>
            <View style={createDeckStyles.innerBorder}>
              <Text style={createDeckStyles.boldText}>Name</Text>
              <TextInput
                placeholder="Enter Deck Name"
                value={deckName}
                onChangeText={(text) => {
                  setDeckName(text);
                }}
              />
            </View>
          </View>
          <View style={createDeckStyles.label}>
            <View style={createDeckStyles.innerBorder}>
              <Text style={createDeckStyles.boldText}>Description</Text>
              <TextInput
                placeholder="Enter Deck Description"
                value={deckDescription}
                onChangeText={(text) => setDeckDescription(text)}
              />
            </View>
          </View>
          <View style={createDeckStyles.button}>
            <TouchableOpacity onPress={handleCreateDeck}>
              <Text style={createDeckStyles.buttonText}>Create Deck</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <CreateCard label={createDeckStyles.label} />
      )}
    </View>
  );
};

const createDeckStyles = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
  },
  label: {
    fontWeight: "bold",
    padding: 10,
    elevation: 5,
    backgroundColor: "#F5F3E5",
    color: "#4682B4",
    alignItems: "center",
    margin: 10,
    width: "70%",
    borderRadius: 10,
  },
  button: {
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    backgroundColor: "#9381FF",
    alignItems: "center",
    margin: 10,
    width: "50%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#F5F3E5",
    fontWeight: "bold",
    fontSize: 24,
  },
  innerBorder: {
    borderColor: "#9381FF",
    borderWidth: 5,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    width: "90%",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default CreateDeck;
