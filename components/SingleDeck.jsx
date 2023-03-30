import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { getDeckByID } from "../utils/api";
import { Fontisto } from "@expo/vector-icons";

const SingleDeck = ({ route }) => {
  const { deck_id } = route.params;
  const [deck, setDeck] = useState({});

  useEffect(() => {
    getDeckByID(deck_id).then((deck) => {
      console.log(deck, "<<response in SingleDeck");
      setDeck(deck);
    });
  }, [deck]);

  //   const testData = [
  //     {
  //       _id: "1",
  //       title: "Test Deck",
  //       description: "Test Description",
  //       cards: [
  //         {
  //           _id: "1",
  //           front: "Question",
  //           back: "Answer",
  //         },
  //         {
  //           _id: "2",
  //           front: "Question 2",
  //           back: "Answer 2",
  //         },
  //         {
  //           _id: "3",
  //           front: "Question 3",
  //           back: "Answer 2",
  //         },
  //         {
  //           _id: "4",
  //           front: "Question 4",
  //           back: "Answer 2",
  //         },
  //         {
  //           _id: "5",
  //           front: "Question 5",
  //           back: "Answer 2",
  //         },
  //       ],
  //     },
  //   ];

  const handleFlipCard = (front, back, _id, cardText) => {
    setDeck((currentDeck) => {
      currentDeck.map((card) => {
        if (_id === card._id) {
          return cardText === front ? (cardText = back) : (cardText = front);
        }
      });
    });
  };

  const Card = ({ front, back, _id }) => {
    let cardText = front;
    return (
      <Pressable onPress={() => handleFlipCard(front, back, _id, cardText)}>
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
        data={deck}
        renderItem={({ item }) => (
          <Card front={item.front} back={item.back} _id={item._id} />
        )}
        keyExtractor={(item) => item._id}
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
