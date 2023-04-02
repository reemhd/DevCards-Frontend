import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from "../utils/api";
import Spinner from "react-native-loading-spinner-overlay";
import { LinearGradient } from "expo-linear-gradient";

const Decks = ({ navigation }) => {
  const [currentDecks, setCurrentDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDecks().then((decks) => {
      setCurrentDecks(decks);
      setLoading(false);
    });
  }, []);

  const Deck = ({ title, description, _id }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("SingleDeck", { deck_id: _id })}
      >
        <View style={deckStyles.deckList}>
          <LinearGradient
            colors={["#F99909", "#F5F3E5"]}
            start={[0, 0]}
            end={[1, 1]}
            style={deckStyles.deckList}
          >
            <View style={deckStyles.innerBorder}>
              <Text style={deckStyles.name}>{title}</Text>
              <Text style={deckStyles.description}>{description}</Text>
            </View>
          </LinearGradient>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      {loading ? (
        <View style={deckStyles.container}>
          <Spinner visible={loading} />
        </View>
      ) : (
        <View style={deckStyles.container}>
          <View style={deckStyles.buttonBox}>
            <Pressable
              style={deckStyles.button}
              title="Create a New Deck"
              onPress={() =>
                navigation.navigate("CreateDeck", { navigation: navigation })
              }
            >
              <MaterialCommunityIcons
                name="cards-outline"
                size={24}
                color="#F5F3E5"
              />
              <Text style={deckStyles.buttonText}>Create Deck</Text>
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
      )}
    </>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#050514",
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
    color: "#050514",
    // "#9381FF"
  },
  description: {
    fontSize: 24,
    padding: 5,
    margin: 10,
    color: "#050514",
    // color: "#9381FF",
  },
  deckList: {
    // backgroundColor: "#818387",
    // "#F5F3E5",
    elevation: 10,
    padding: 5,
    margin: 10,
    height: 170,
    borderRadius: 10,
    // borderColor: "#F9F9F9",
    // borderWidth: 1,
  },
  buttonBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
    elevation: 7,
    backgroundColor: "#F99909",
    borderRadius: 8,
  },
  buttonText: {
    color: "#050514",
    // "#F5F3E5",
    fontSize: 22,
    fontWeight: "bold",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Decks;
