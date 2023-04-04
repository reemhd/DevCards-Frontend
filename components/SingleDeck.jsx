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
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SingleCard from "./SingleCard";
import { deleteCard } from "../utils/api";

const SingleDeck = ({ route, navigation }) => {
  const { deck_id, title } = route.params;
  const [deck, setDeck] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardID, setCardID] = useState("");

  useEffect(() => {
    getDeckByID(deck_id).then((deck) => {
      setDeck(deck);
    });
  }, []);

  const handleExpandPress = (_id) => {
    setIsModalVisible(true);
    setCardID(_id);
  };

  const handleDeletePress = (_id) => {
    setDeck((currentDeck) => {
      return currentDeck.filter((card) => {
        return card._id !== _id;
      });
    });
    deleteCard(_id);
  };

  const Card = ({ front, _id }) => {
    return (
      <View>
        <View style={singleDeckStyle.cardList}>
          <Text style={singleDeckStyle.text}>{front}</Text>
        </View>
        <Pressable onPress={() => handleExpandPress(_id)}>
          <View style={singleDeckStyle.expand}>
            <Ionicons name="expand-sharp" size={44} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => handleDeletePress(_id)}>
          <View style={singleDeckStyle.delete}>
            <Feather name="trash-2" size={44} color="white" />
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={singleDeckStyle.container}>
      <View style={singleDeckStyle.title}>
        <Text style={singleDeckStyle.titleText}>{title}</Text>
      </View>
      <>
        {deck.length === 0 ? (
          <View style={singleDeckStyle.empty}>
            <Text style={singleDeckStyle.emptyText}>
              This deck is currently empty. Click below to add a card!
            </Text>
          </View>
        ) : (
          <>
            <Modal visible={isModalVisible} transparent={false}>
              <View style={singleDeckStyle.container}>
                <SingleCard cardID={cardID} deck={deck} />
                <View style={singleDeckStyle.closeModal}>
                  <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                    <Text style={singleDeckStyle.closeModalText}>
                      Back to Deck
                    </Text>
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
          </>
        )}
      </>

      <Pressable
        style={singleDeckStyle.revise}
        title="Revise"
        onPress={() => navigation.navigate("Revise", { deck })}
      >
        <Text style={singleDeckStyle.reviseText}>Revise</Text>
      </Pressable>
      <Pressable
        style={singleDeckStyle.button}
        title="Create a New Card"
        onPress={() =>
          navigation.navigate("CreateCard", {
            newDeckID: deck_id,
            setDeck,
            title,
          })
        }
      >
        <FontAwesome5 name="plus" size={34} color="black" />
      </Pressable>
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

  revise: {
    backgroundColor: "#F99909",
    position: "absolute",
    bottom: 30,
    left: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  reviseText: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 15,

  empty: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#27272D",
  },
  emptyText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,

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
    width: 300,
  },
  button: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    elevation: 7,
    backgroundColor: "#61DEB5",
    borderRadius: 50,
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.37,
    shadowRadius: 4.65,
    marginBottom: 10,
    marginRight: 12,
  },
  expand: {
    position: "absolute",
    bottom: 10,
    right: 30,
    alignSelf: "flex-end",
  },
  delete: {
    position: "absolute",
    bottom: 10,
    left: 30,
  },
  title: {
    marginTop: 15,
  },
  titleText: {
    fontSize: 24,
    color: "#F99909",
    fontWeight: "bold",
  },
});
export default SingleDeck;
