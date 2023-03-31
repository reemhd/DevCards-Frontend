import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import CreateCard from "./CreateCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { postDeck } from "../utils/api";

const CreateDeck = ({ navigation }) => {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const [showCreateCard, setShowCreateCard] = useState(false);
  const [newDeckID, setNewDeckID] = useState("");

  const handleCreateDeck = () => {
    postDeck(deckName, deckDescription).then((deck) => {
      console.log(deck._id);
      setNewDeckID(deck._id);
    });
    setShowCreateCard(true);
  };

  return (
    <KeyboardAvoidingView
      style={createDeckStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {!showCreateCard ? (
        <>
          <MaterialCommunityIcons
            name="cards-outline"
            size={50}
            color="#F9F9F9"
          />
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
            <TouchableOpacity
              disabled={deckName && deckDescription ? false : true}
              onPress={handleCreateDeck}
            >
              <Text style={createDeckStyles.buttonText}>Create Deck</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <CreateCard newDeckID={newDeckID} navigation={navigation} />
      )}
    </KeyboardAvoidingView>
  );
};

const createDeckStyles = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#27272D",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
  },
  label: {
    fontWeight: "bold",
    padding: 10,
    elevation: 5,
    backgroundColor: "#818387",
    color: "#F9F9F9",
    alignItems: "center",
    margin: 10,
    width: "70%",
    borderRadius: 10,
    borderColor: "#F9F9F9",
    borderWidth: 1,
  },
  button: {
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    backgroundColor: "#F99909",
    alignItems: "center",
    margin: 10,
    width: "50%",
    borderRadius: 10,
    shadowColor: "#F9F9F9",
    shadowRadius: 10,
    shadowOpacity: 0,
  },
  buttonText: {
    color: "#F5F3E5",
    fontWeight: "bold",
    fontSize: 24,
  },
  innerBorder: {
    borderColor: "#F99909",
    borderWidth: 5,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    width: "90%",
  },
  boldText: {
    fontWeight: "bold",
    color: "#F9F9F9",
  },
});

export default CreateDeck;
