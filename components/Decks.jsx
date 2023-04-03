import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from "../utils/api";
import { useFocusEffect } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

const Decks = ({ navigation }) => {
  const [currentDecks, setCurrentDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDecks().then((decks) => {
      setCurrentDecks(decks);
      setLoading(false);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDecks().then((decks) => {
        setCurrentDecks(decks);
      });
    }, [])
  );

  const Deck = ({ title, description, _id }) => {
    return (
      <Pressable
        onPress={() => navigation.navigate("SingleDeck", { deck_id: _id })}
      >
        <View style={deckStyles.deckList}>
          <LinearGradient
            colors={["#f19100", "#fff"]}
            start={[0, 1]}
            end={[3, 2]}
            style={deckStyles.deckList}
          >
            <View style={deckStyles.innerBorder}>
              <Text style={deckStyles.name}>{title}</Text>
              <Text
                style={deckStyles.description}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {description}
              </Text>
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
          {/* <View style={deckStyles.buttonBox}> */}
          <Pressable
            style={deckStyles.button}
            title="Create a New Deck"
            onPress={() =>
              navigation.navigate("CreateDeck", { navigation: navigation })
            }
          >
            {/* <Text style={deckStyles.buttonText}></Text> */}
            {/* <MaterialCommunityIcons
                name="cards-outline"
                size={24}
                color="#F5F3E5"
              /> */}
            <FontAwesome5 name="plus" size={34} color="black" />
          </Pressable>
          {/* </View> */}
        </View>
      )}
    </>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2c2c2c",
    // "#4682B4"
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 5,
    paddingBottom: 0,
    margin: 10,

    marginBottom: 0,
    color: "#050514",
    // "#9381FF"
  },
  description: {
    fontSize: 18,

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
    marginBottom: 12,
    height: 140,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.87,
    shadowRadius: 4.65,
    marginBottom: 10,
    marginRight: 12,
    // borderColor: "#F9F9F9",
    // borderWidth: 1,
  },
  // buttonBox: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
