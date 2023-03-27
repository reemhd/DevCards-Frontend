import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Decks = () => {
  const testDecks = [
    { name: "JS", description: "Testtesttest", id: 1 },
    { name: "Python", description: "Testtesttest", id: 2 },
    { name: "HTML", description: "Testtesttest", id: 3 },
  ];
  const [currentDecks, setCurrentDecks] = useState([]);

  useEffect(() => {}, []);

  const renderItem = ({ item }) => {
    return (
      <View style={deckStyles.deckList}>
        <Text style={deckStyles.name}>{item.name}</Text>
        <Text style={deckStyles.description}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={deckStyles.container}>
      <FlatList
        data={testDecks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#4682B4",
    justifyContent: "center",
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
    borderStyle: "solid",
    borderWidth: 5,
    borderTopColor: "#F5F3E5",
    borderLeftColor: "#F5F3E5",
    borderRightColor: "#77486E",
    borderBottomColor: "#77486E",
    backgroundColor: "#F5F3E5",
    padding: 10,
    margin: 20,
    height: 170,
  },
});

export default Decks;
