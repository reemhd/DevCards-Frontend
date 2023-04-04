import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useUser } from "../context/UserContext";
import Spinner from "react-native-loading-spinner-overlay";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from "../utils/api";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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

  useFocusEffect(
    useCallback(() => {
      getDecks().then((decks) => {
        const filteredDecks = decks.filter((deck) =>
          user.user_decks.includes(deck._id)
        );
        setCurrentDecks(filteredDecks);
        setLoading(false);
      });
    }, [user])
  );

  //   const Deck = ({ title, user_percent }) => {
  //     const findAveragePercent = (array) => {
  //       const average = array.reduce((a, b) => a + b, 0);
  //       return Math.floor(average / (array.length - 1));
  //     };
  //     return (
  //       <View style={analyticsStyle.deck}>
  //         <View>
  //           <MaterialCommunityIcons
  //             name="google-analytics"
  //             size={24}
  //             color="white"
  //           />
  //         </View>
  //         <View>
  //           <Text style={analyticsStyle.title}>{title}</Text>
  //         </View>
  //         <View>
  //           <Text style={analyticsStyle.percent}>
  //             {findAveragePercent(user_percent)}%
  //           </Text>
  //         </View>
  //       </View>
  //     );
  //   };

  const findAveragePercent = (array) => {
    const average = array.reduce((a, b) => a + b, 0);
    return Math.floor(average / (array.length - 1));
  };

  return (
    <>
      {loading ? (
        <View style={analyticsStyle.loadingContainer}>
          <Spinner visible={loading} />
        </View>
      ) : (
        <View style={analyticsStyle.container}>
          <View style={analyticsStyle.header}>
            <Ionicons name="analytics" size={100} color="white" />
            <Text style={analyticsStyle.title}>{user.username}'s Stats</Text>
          </View>

          <View style={analyticsStyle.content}>
            <View style={analyticsStyle.column}>
              <Text style={analyticsStyle.columnHeader}>Deck Name</Text>
              {currentDecks.map((deck) => (
                <Text key={deck._id} style={analyticsStyle.text}>
                  {deck.title}
                </Text>
              ))}
            </View>
            <View style={analyticsStyle.column}>
              <Text style={analyticsStyle.columnHeader}>Average Score</Text>
              {currentDecks.map((deck) => (
                <Text key={deck._id} style={analyticsStyle.text}>
                  {findAveragePercent(deck.user_percent)}%
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const analyticsStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F99909",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F99909",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#27272D",
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 100,
  },
  column: {
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  columnHeader: {
    fontWeight: "bold",
    color: "#27272D",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#F9F9F9",
    marginBottom: 5,
  },
  totalText: {
    fontWeight: "bold",
    color: "#F9F9F9",
    marginTop: 10,
  },
  logout: {
    marginTop: 30,
    fontWeight: "bold",
    color: "#F9F9F9",
  },
  button: {
    backgroundColor: "#f19100",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Analytics;
