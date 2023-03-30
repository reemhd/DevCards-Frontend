import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from "../utils/api";

const Decks = ({ navigation }) => {
  const [currentDecks, setCurrentDecks] = useState([]);

  useEffect(() => {
    getDecks().then((decks) => {
      setCurrentDecks(decks);
    });
  }, []);

  const Deck = ({ title, description, _id }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("SingleDeck", { deck_id: _id })}
      >
        <View style={deckStyles.deckList}>
          <View style={deckStyles.innerBorder}>
            <Text style={deckStyles.name}>{title}</Text>
            <Text style={deckStyles.description}>{description}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={deckStyles.container}>
      <View style={deckStyles.buttonBox}>
        <Pressable
          style={deckStyles.button}
          title="Create a New Deck"
          onPress={() => navigation.navigate("CreateDeck")}
        >
          <Text style={deckStyles.buttonText}>Create Deck</Text>
          <MaterialCommunityIcons
            name="cards-outline"
            size={24}
            color="#F5F3E5"
          />
        </Pressable>
      </View>
      <FlatList
        data={currentDecks}
        renderItem={({ item }) => (
          <Deck
            title={item.title}
            description={item.description}
            _id={item._id}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#27272D",
    // "#4682B4"
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 5,
    margin: 10,
    color: "#F9F9F9",
    // "#9381FF"
  },
  description: {
    fontSize: 24,
    padding: 5,
    margin: 10,
    color: "#F9F9F9",
    // color: "#9381FF",
  },
  deckList: {
    backgroundColor: "#818387",
    // "#F5F3E5",
    elevation: 10,
    padding: 10,
    margin: 20,
    height: 170,
    borderRadius: 10,
    borderColor: "#F9F9F9",
    borderWidth: 1,
  },
  innerBorder: {
    borderColor: "#F99909",
    // "#9381FF",
    borderWidth: 5,
    borderRadius: 10,
    padding: 0,
  },
  buttonBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 3,
    borderColor: "#F9F9F9",
    // "#F5F3E5",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
    elevation: 7,
    backgroundColor: "#818387",
    borderRadius: 8,
  },
  buttonText: {
    color: "#F99909",
    // "#F5F3E5",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Decks;
