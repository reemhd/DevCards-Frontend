import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { postDeck } from "../utils/api";

const CreateDeck = ({ navigation }) => {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const handleCreateDeck = () => {
    postDeck(deckName, deckDescription).then((deck) => {
      console.log(deck._id);
      navigation.navigate("CreateCard", { newDeckID: deck._id });
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      style={createDeckStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <MaterialCommunityIcons name="cards-outline" size={50} color="#F9F9F9" />
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
            maxLength={30}
            multiline={true}
            numberOfLines={3}
            placeholder="Enter Deck Description"
            value={deckDescription}
            onChangeText={(text) => setDeckDescription(text)}
          />
        </View>
      </View>
      <View
        style={
          deckName && deckDescription
            ? createDeckStyles.buttonActive
            : createDeckStyles.buttonInactive
        }
      >
        <TouchableOpacity
          disabled={deckName && deckDescription ? false : true}
          onPress={handleCreateDeck}
        >
          <Text style={createDeckStyles.buttonText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
  },
  label: {
    fontWeight: "bold",
    padding: 10,
    elevation: 5,
    backgroundColor: "#BAB484",
    color: "black",
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
    width: "35%",
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
  // innerBorder: {
  //   borderColor: "#F99909",
  //   borderWidth: 5,
  //   borderRadius: 10,
  //   padding: 5,
  //   paddingLeft: 25,
  //   paddingRight: 25,
  //   width: "90%",
  // },
  boldText: {
    fontWeight: "bold",
    color: "black",
  },
  buttonActive: {
    backgroundColor: "#F99909",
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    alignItems: "center",
    margin: 10,
    width: "50%",
    borderRadius: 10,
    shadowColor: "#F9F9F9",
    shadowRadius: 10,
    shadowOpacity: 0,
  },
  buttonInactive: {
    backgroundColor: "#E3BC98",
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    alignItems: "center",
    margin: 10,
    width: "50%",
    borderRadius: 10,
    shadowColor: "#F9F9F9",
    shadowRadius: 10,
    shadowOpacity: 0,
  },
});

export default CreateDeck;
