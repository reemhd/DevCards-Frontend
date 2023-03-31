import React, { useState, useRef } from "react";
import { Animated, View, Text, StyleSheet, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SingleCard = ({ cardID, deck }) => {
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

  const handleFlipCard = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const cardToRender = deck.filter((card) => {
    return card._id === cardID;
  });

  return (
    <View style={singleDeckStyle.container}>
      <Pressable onPress={handleFlipCard}>
        <View style={singleDeckStyle.cardContainer}>
          <Animated.View
            style={[
              { transform: [{ rotateY: interpolateFront }] },
              singleDeckStyle.hidden,
              singleDeckStyle.cardList,
            ]}
          >
            <Text style={singleDeckStyle.text}>{cardToRender[0].front}</Text>
            <View style={singleDeckStyle.spinner}>
              <Fontisto name="spinner-rotate-forward" size={24} color="white" />
            </View>
          </Animated.View>

          <Animated.View
            style={[
              { transform: [{ rotateY: interpolateBack }] },
              singleDeckStyle.hidden,
              singleDeckStyle.cardListBack,
            ]}
          >
            <Text style={singleDeckStyle.text}>{cardToRender[0].back}</Text>
            <View style={singleDeckStyle.spinner}>
              <Fontisto name="spinner-rotate-forward" size={24} color="white" />
            </View>
          </Animated.View>
        </View>
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
  cardContainer: {
    width: 350,
    height: 300,
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
    width: 300,
    position: "absolute",
    top: 0,
    left: 0,
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
    backgroundColor: "#BAB484",
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
    left: 0,
  },
});

export default SingleCard;
