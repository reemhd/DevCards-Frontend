import React, { useState, useRef } from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { patchUserPercent } from "../utils/api";

const Revise = ({ route, navigation }) => {
  const { deck, deck_id } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [endOfQuestions, setEndOfQuestions] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Well done!");
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

  const handleTickPress = () => {
    if (currentIndex === deck.length - 1) {
      setEndOfQuestions(true);
      if (score === 0) {
        setMessage("Bad luck!");
      }
    }
    setCurrentIndex(currentIndex + 1);
    setScore(score + 1);
    handleFlipCard();
  };

  const handleCrossPress = () => {
    if (currentIndex === deck.length - 1) {
      setEndOfQuestions(true);
      if (score === 0) {
        setMessage("Bad luck!");
      }
    }
    setCurrentIndex(currentIndex + 1);
    handleFlipCard();
  };
  const handleFinish = () => {
    const percent = Math.floor((score / deck.length) * 100);
    patchUserPercent(percent, deck_id);
    navigation.navigate("Decks");
  };

  return (
    <>
      {endOfQuestions ? (
        <View style={reviseStyle.end}>
          <Text style={reviseStyle.endText}>
            You scored {Math.floor((score / deck.length) * 100)}%
          </Text>
          <Text style={reviseStyle.endText}>{message}</Text>
          <Pressable style={reviseStyle.finish} onPress={handleFinish}>
            <Text style={reviseStyle.finishText}>Back to Decks</Text>
          </Pressable>
          <View style={reviseStyle.lower}>
            <Text style={reviseStyle.lowerText}>
              Click below to view your full analytics
            </Text>
          </View>
          <View style={reviseStyle.arrow}>
            <Entypo name="arrow-long-down" size={54} color="#F99909" />
          </View>
        </View>
      ) : (
        <View style={reviseStyle.container}>
          <Pressable onPress={handleFlipCard}>
            <View style={reviseStyle.cardContainer}>
              <Animated.View
                style={[
                  { transform: [{ rotateY: interpolateFront }] },
                  reviseStyle.hidden,
                  reviseStyle.cardList,
                ]}
              >
                <Text style={reviseStyle.text}>{deck[currentIndex].front}</Text>
              </Animated.View>

              <Animated.View
                style={[
                  { transform: [{ rotateY: interpolateBack }] },
                  reviseStyle.hidden,
                  reviseStyle.cardListBack,
                ]}
              >
                <View style={reviseStyle.textBox}>
                  <Text style={reviseStyle.text}>
                    {deck[currentIndex].back}
                  </Text>
                </View>
                <View style={reviseStyle.buttons}>
                  <Pressable style={reviseStyle.tick} onPress={handleTickPress}>
                    <Ionicons name="checkmark-sharp" size={34} color="white" />
                  </Pressable>

                  <Pressable
                    style={reviseStyle.cross}
                    onPress={handleCrossPress}
                  >
                    <Feather name="x" size={34} color="black" />
                  </Pressable>
                </View>
              </Animated.View>
            </View>
          </Pressable>
        </View>
      )}
    </>
  );
};

const reviseStyle = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
    color: "black",
  },
  arrow: {
    position: "absolute",
    bottom: 20,
  },
  lower: {
    position: "absolute",
    bottom: 90,
  },
  lowerText: {
    color: "white",
    fontSize: 18,
  },
  cardContainer: {
    width: 300,
    height: 450,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#27272D",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  cardList: {
    backgroundColor: "#F99909",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 3,
    height: 350,
    width: 300,
    position: "absolute",
    top: 0,
    left: 0,
  },

  hidden: {
    backfaceVisibility: "hidden",
  },
  cardListBack: {
    backgroundColor: "#F99909",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 3,
    height: 350,
    width: 300,
    position: "absolute",
    top: 0,
    left: 0,
  },
  tick: {
    backgroundColor: "green",
    flex: 2,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    padding: 10,
    borderColor: "white",
    borderWidth: 3,
  },
  cross: {
    backgroundColor: "red",
    flex: 2,
    alignItems: "center",
    borderBottomRightRadius: 20,
    padding: 10,
    borderColor: "white",
    borderWidth: 3,
    borderLeftWidth: 0,
  },
  buttons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  end: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27272D",
  },
  endText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    margin: 25,
  },
  finish: {
    backgroundColor: "#F99909",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  finishText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Revise;
