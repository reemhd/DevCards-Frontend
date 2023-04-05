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
import Spinner from "react-native-loading-spinner-overlay";

const SingleDeck = ({ route, navigation }) => {
  const { deck_id, title } = route.params;
  const [deck, setDeck] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardID, setCardID] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getDeckByID(deck_id).then((deck) => {
      setDeck(deck);
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      setLoadingError(true)
    })
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
            <Ionicons name="expand-sharp" size={24} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => handleDeletePress(_id)}>
          <View style={singleDeckStyle.delete}>
            <Feather name="trash-2" size={24} color="white" />
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <>
    {loading ? ( loadingError ? <View style={singleDeckStyle.center}>
        <Text style={singleDeckStyle.errorText}>Error Loading Decks</Text>
        </View> :
    <View style={singleDeckStyle.spinnerContainer}>
      <Spinner visible={loading} />
    </View>) :
    ( loadingError ? <View style={singleDeckStyle.center}>
      <Text style={singleDeckStyle.errorText}>Error Loading Decks</Text>
      </View> : 
      <View style={singleDeckStyle.container}>
      <View style={singleDeckStyle.title}>
        <Text style={singleDeckStyle.titleText}>{title} Deck</Text>
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
        onPress={() => navigation.navigate("Revise", { deck, deck_id })}
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
    </View>)}
  </>
  );
}; 

const singleDeckStyle = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 10,
    color: "#61DEB5",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
    color: "black",
  },
  revise: {
    width: 150,
    height: 80,
    backgroundColor: "#61DEB5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.57,
    shadowRadius: 4.65,
    marginBottom: 10,
    marginRight: 12,
    position: "absolute",
    bottom: 20,
    left: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  reviseText: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 15,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#2c2c2c",
  },
  emptyText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    margin: 20,
  },
  closeModal: {
    backgroundColor: "#61DEB5",
    borderColor: "#61DEB5",
    position: "absolute",
    bottom: 150,
    borderWidth: 4,
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,
    elevation: 5,
  },
  spinnerContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  closeModalText: {
    color: "#2c2c2c",
    fontWeight: "bold",
    fontSize: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "center",
  },
  cardList: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f19100",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.87,
    shadowRadius: 4.65,
    marginBottom: 10,
    marginRight: 12,
    elevation: 10,
    padding: 2,
    margin: 20,
    marginBottom: 0,
    borderRadius: 10,
    borderColor: "#f19100",
    borderWidth: 5,
    height: 150,
    width: 350,
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
  errorText: {
    fontWeight: "bold",
    color: "#FF0000",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2c",
  },
});
export default SingleDeck;
