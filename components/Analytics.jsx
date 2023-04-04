import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useUser } from "../context/UserContext";
import Spinner from "react-native-loading-spinner-overlay";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from "../utils/api";

const Analytics = () => {
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [currentDecks, setCurrentDecks] = useState([]);

  useEffect(() => {
    getDecks().then((decks) => {
      const filteredDecks = decks.filter((deck) =>
        user.user_decks.includes(deck._id)
      );
      setCurrentDecks(filteredDecks);
      setLoading(false);
    });
  }, [user]);

  const Deck = ({ title, user_percent }) => {
    const findAveragePercent = (array) => {
      const average = array.reduce((a, b) => a + b, 0);
      return average / (array.length - 1);
    };
    return (
      <View style={analyticsStyle.deck}>
        <MaterialCommunityIcons
          name="google-analytics"
          size={24}
          color="white"
        />
        <Text style={analyticsStyle.title}>{title}</Text>
        <Text style={analyticsStyle.percent}>
          {findAveragePercent(user_percent)}%
        </Text>
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <View style={analyticsStyle.loadingContainer}>
          <Spinner visible={loading} />
        </View>
      ) : (
        <View style={analyticsStyle.container}>
          <FlatList
            data={currentDecks}
            renderItem={({ item }) => (
              <Deck title={item.title} user_percent={item.user_percent} />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </>
  );
};

const analyticsStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F99909",
  },
  deck: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    color: "white",
  },
  percent: {
    color: "white",
  },
});

export default Analytics;
