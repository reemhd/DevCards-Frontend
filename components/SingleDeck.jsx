import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Animated,
} from "react-native";
import { getDeckByID } from "../utils/api";
import { Fontisto } from "@expo/vector-icons";

const SingleDeck = ({ route }) => {
  const { deck_id } = route.params;
  const [deck, setDeck] = useState({});
  const [isFlipped, setIsFlipped] = useState(false);
  const animate = useRef(new Animated.Value(0));

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  useEffect(() => {
    getDeckByID(deck_id).then((deck) => {
      setDeck(deck);
    });
  }, []);

  const handleFlipCard = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const Card = ({ front, back }) => {
    return (
      <View>
        <Pressable onPress={handleFlipCard}>
          <Animated.View
            style={[
              { transform: [{ rotateY: interpolateFront }] },
              singleDeckStyle.hidden,
              singleDeckStyle.cardList,
            ]}
          >
            <Text style={singleDeckStyle.text}>{front}</Text>
            <View style={singleDeckStyle.spinner}>
              <Fontisto name="spinner-rotate-forward" size={24} color="white" />
            </View>
          </Animated.View>
        </Pressable>
        <Pressable
        // onPress={() =>
        //  handleFlipCard(front, back, _id, cardText)}
        >
          <Animated.View
            style={[
              { transform: [{ rotateY: interpolateBack }] },
              singleDeckStyle.hidden,
              singleDeckStyle.cardListBack,
            ]}
          >
            <Text style={singleDeckStyle.text}>{back}</Text>
            <View style={singleDeckStyle.spinner}>
              <Fontisto name="spinner-rotate-forward" size={24} color="white" />
            </View>
          </Animated.View>
        </Pressable>
      </View>
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
    padding: 20,
    color: "black",
  },
  container: {
    flex: 1,
    flexDirection: "column",
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
  spinner: {
    position: "absolute",
    bottom: 0,
    alignSelf: "flex-end",
    paddingRight: 15,
    paddingBottom: 10,
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
  cardListBack: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#818387",
    // "#F5F3E5",
    elevation: 10,
    padding: 2,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    borderColor: "#F99909",
    borderWidth: 5,
    shadowColor: "#F9F9F9",
    height: 250,
    position: "absolute",
    top: 0,
  },
});
export default SingleDeck;
