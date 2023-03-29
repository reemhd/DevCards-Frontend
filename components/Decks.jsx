import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";

const Decks = ({ navigation }) => {
  const testDecks = [
    { name: "JS", description: "Testtesttest", id: 1 },
    { name: "Python", description: "Testtesttest", id: 2 },
    { name: "HTML", description: "Testtesttest", id: 3 },
  ];
  const [currentDecks, setCurrentDecks] = useState([]);

  useEffect(() => {}, []);

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={deckStyles.deckList}>
  //       <Text style={deckStyles.name}>{item.name}</Text>
  //       <Text style={deckStyles.description}>{item.description}</Text>
  //     </View>
  //   );
  // };

  return (
    <ScrollView>
      <View style={deckStyles.container}>
        <View style={deckStyles.buttonBox}>
          <Pressable
            style={deckStyles.button}
            title="Create a New Deck"
            onPress={() => navigation.navigate("CreateDeck")}
          >
            <Text style={deckStyles.buttonText}>Create Deck</Text>
            <Text style={deckStyles.buttonPlus}>+</Text>
          </Pressable>
        </View>
        {testDecks.map((testDeck) => (
          <View style={deckStyles.deckList} key={testDeck.id}>
            <View style={deckStyles.innerBorder}>
              <Text style={deckStyles.name}>{testDeck.name}</Text>
              <Text style={deckStyles.description}>{testDeck.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 5,
    margin: 10,
    color: "#9381FF",
  },
  description: {
    fontSize: 24,
    padding: 5,
    margin: 10,
    color: "#9381FF",
  },
  deckList: {
    backgroundColor: "#F5F3E5",
    elevation: 10,
    padding: 10,
    margin: 20,
    height: 170,
    borderRadius: 10,
  },
  innerBorder: {
    borderColor: "#9381FF",
    borderWidth: 5,
    borderRadius: 10,
    padding: 0,
  },
  buttonBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 5,
    borderColor: "#F5F3E5",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
    elevation: 1,
  },
  buttonText: {
    color: "#F5F3E5",
    fontSize: 22,
    padding: 5,
    paddingBottom: 0,
  },
  buttonPlus: {
    color: "#F5F3E5",
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 0,
  },
});

export default Decks;
