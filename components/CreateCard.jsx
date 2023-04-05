import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { postCard } from "../utils/api";

const CreateCard = ({ navigation, route }) => {
  const { newDeckID } = route.params;
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const handleCreateCard = () => {
    postCard(cardFront, cardBack, newDeckID).then(() => {
      console.log("card created");
    });
    navigation.navigate("Decks");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={cardStyles.container}>
        <View style={cardStyles.center}>
          <MaterialCommunityIcons
            name="card-text-outline"
            size={50}
            color="#f19100"
          />
          <View
            style={
              cardFront
                ? cardStyles.enterTextActive
                : cardStyles.enterTextInactive
            }
          >
            <Text style={cardStyles.label}>Front</Text>
            <TextInput
              maxLength={70}
              multiline={true}
              numberOfLines={5}
              style={cardStyles.inputBox}
              placeholder="Enter your question here"
              placeholderTextColor="white"
              value={cardFront}
              onChangeText={(text) => setCardFront(text)}
            />
          </View>
          <View
            style={
              cardBack
                ? cardStyles.enterTextActive
                : cardStyles.enterTextInactive
            }
          >
            <Text style={cardStyles.label}>Back</Text>
            <TextInput
              maxLength={70}
              multiline={true}
              numberOfLines={5}
              style={cardStyles.inputBox}
              placeholder="Enter your answer here"
              placeholderTextColor="white"
              value={cardBack}
              onChangeText={(text) => setCardBack(text)}
            />
          </View>
          <View
            style={
              cardFront && cardBack
                ? cardStyles.buttonActive
                : cardStyles.buttonInactive
            }
          >
            <TouchableOpacity
              disabled={cardFront && cardBack ? false : true}
              onPress={handleCreateCard}
            >
              <Text style={cardStyles.buttonText}>Create Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#2c2c2c",
  },
  inputBox: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#2c2c2c",
    width: 280,
    color: "#fff",
  },
  enterTextInactive: {
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 150,
    backgroundColor: "#42403d",
    marginTop: 10,
    borderRadius: 5,
  },
  enterTextActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 150,
    backgroundColor: "#f19100",
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#2c2c2c",
    fontWeight: "bold",
    fontSize: 24,
  },
  buttonActive: {
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    backgroundColor: "#61DEB5",
    alignItems: "center",
    margin: 10,
    width: "90%",
    borderRadius: 10,
    shadowColor: "#F9F9F9",
    shadowRadius: 10,
    shadowOpacity: 0,
    marginTop: 30,
  },
  buttonInactive: {
    fontWeight: "bold",
    padding: 10,
    elevation: 10,
    backgroundColor: "#42403d",
    alignItems: "center",
    margin: 10,
    width: "90%",
    borderRadius: 10,
    shadowColor: "#F9F9F9",
    shadowRadius: 10,
    shadowOpacity: 0,
    marginTop: 30,
  },
  label: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#2c2c2c",
    fontWeight: "bold",
    fontSize: 30,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateCard;
