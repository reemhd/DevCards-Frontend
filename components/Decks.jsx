import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

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
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={testDecks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Decks;
