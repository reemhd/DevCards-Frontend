import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { postCard } from "../utils/api";

const CreateCard = ({ navigation, newDeckID }) => {
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const handleCreateCard = () => {
    postCard(cardFront, cardBack, newDeckID).then(() => {
      console.log("card created");
    });
    navigation.navigate("SingleDeck", { deckID: newDeckID });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <View style={cardStyles.container}>
        <MaterialCommunityIcons
          name="card-text-outline"
          size={50}
          color="#F9F9F9"
        />

        <Text style={cardStyles.label}>Front</Text>

        <TextInput
          style={cardStyles.inputBox}
          placeholder="Enter your question here"
          value={cardFront}
          onChangeText={(text) => setCardFront(text)}
        />
        <Text style={cardStyles.label}>Back</Text>
        <TextInput
          style={cardStyles.inputBox}
          placeholder="Enter your answer here"
          value={cardBack}
          onChangeText={(text) => setCardBack(text)}
        />
        <View style={cardStyles.button}>
          <TouchableOpacity
            disabled={cardFront && cardBack ? false : true}
            onPress={handleCreateCard}
          >
            <Text style={cardStyles.buttonText}>Create Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    borderWidth: 5,
    borderColor: "#F9F9F9",
    margin: 50,
    padding: 20,
    backgroundColor: "#27272D",
    borderRadius: 8,
  },
  inputBox: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F9F9F9",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#818387",
  },
  label: {
    fontWeight: "bold",
    padding: 10,
    elevation: 5,
    backgroundColor: "#F99909",
    color: "#F9F9F9",
    alignItems: "center",
    margin: 10,
    width: "80%",
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
    width: "80%",
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
});

export default CreateCard;
