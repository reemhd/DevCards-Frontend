import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { getDeckByID } from "../utils/api";

import SingleCard from "./SingleCard";

const SingleDeck = ({ route }) => {
  const { deck_id } = route.params;
  const [deck, setDeck] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardID, setCardID] = useState("");

  useEffect(() => {
    getDeckByID(deck_id).then((deck) => {
      setDeck(deck);
    });
  }, []);

  const handleOnPress = (_id) => {
    setIsModalVisible(true);
    setCardID(_id);
  };

  const Card = ({ front, _id }) => {
    return (
      <View style={singleDeckStyle.cardList}>
        <Pressable onPress={() => handleOnPress(_id)}>
          <Text style={singleDeckStyle.text}>{front}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={singleDeckStyle.container}>
      <Modal visible={isModalVisible} transparent={false}>
        <View style={singleDeckStyle.container}>
          <SingleCard cardID={cardID} deck={deck} />
          <View style={singleDeckStyle.closeModal}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={singleDeckStyle.closeModalText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    padding: 20,
    color: "black",
  },
  closeModal: {
    backgroundColor: "#F99909",
    borderColor: "#BAB484",
    position: "absolute",
    bottom: 150,
    borderWidth: 4,
    padding: 5,
    borderRadius: 10,
  },
  closeModalText: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#27272D",
    // "#4682B4"
    justifyContent: "center",
    alignItems: "center",
  },
  cardList: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BAB484",
    elevation: 10,
    padding: 2,
    margin: 20,
    marginBottom: 0,
    borderRadius: 10,
    borderColor: "#F99909",
    borderWidth: 5,
    shadowColor: "#F9F9F9",
    height: 250,
  },
});
export default SingleDeck;
