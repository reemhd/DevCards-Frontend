import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { getDeckByID } from "../utils/api";
import { Fontisto } from "@expo/vector-icons";

const SingleDeck = ({ deck_id }) => {
  const [deck, setDeck] = useState({});
  const [cardText, setCardText] = useState("");

  // useEffect(() => {
  //   getDeckByID(deck_id).then((deck) => {
  //     setDeck(deck);
  //   });
  // }, [deck]);

  const testData = [
    {
      _id: "1",
      title: "Test Deck",
      description: "Test Description",
      cards: [
        {
          front: "Question",
          back: "Answer",
        },
        {
          front: "Question 2",
          back: "Answer 2",
        },
        {
          front: "Question 3",
          back: "Answer 2",
        },
        {
          front: "Question 4",
          back: "Answer 2",
        },
        {
          front: "Question 5",
          back: "Answer 2",
        },
      ],
    },
  ];

  const handleFlipCard = (back, front, cardText) => {
    if (cardText === front) return (cardText = back);
    if (cardText === back) return (cardText = front);
  };

  const Card = ({ front, back }) => {
    let cardText = front;
    return (
      <Pressable onPress={() => handleFlipCard(back, front, cardText)}>
        <View style={singleDeckStyle.cardList}>
          <Text style={singleDeckStyle.text}>{cardText}</Text>
          <View style={singleDeckStyle.spinner}>
            <Fontisto name="spinner-rotate-forward" size={24} color="white" />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={singleDeckStyle.container}>
      <FlatList
        data={testData[0].cards}
        renderItem={({ item }) => <Card front={item.front} back={item.back} />}
        keyExtractor={(item) => item.front}
      />
    </View>
  );
};

const singleDeckStyle = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#27272D",
    // "#4682B4"
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  cardList: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#818387",
    // "#F5F3E5",
    elevation: 10,
    padding: 10,
    margin: 20,
    marginBottom: 0,
    height: 170,
    borderRadius: 10,
    borderColor: "#F99909",
    borderWidth: 5,
    elevation: 5,
    shadowColor: "#F9F9F9",
  },
  spinner: {
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingBottom: 5,
  },
});
export default SingleDeck;
