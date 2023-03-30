import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getDeckByID } from "../utils/api";

const SingleDeck = () => {
  const [deck, setDeck] = useState({});

  // useEffect(()=> {
  // getDeckByID().then((deck)=> {
  // setDeck(deck)
  // })
  // }, [])

  return (
    <View style={singleDeckStyle.center}>
      <Text style={singleDeckStyle.text}>Single Deck is rendering</Text>
    </View>
  );
};

const singleDeckStyle = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SingleDeck;
