import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import { getDecks } from "../utils/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UserProfile = ({ navigation }) => {
  const { user, updateUser } = useUser();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getDecks().then((decks) => {
      const filteredDecks = decks.filter((deck) =>
        user.user_decks.includes(deck._id)
      );
      setDecks(filteredDecks);
    });
  }, [user]);

  const handleLogout = () => {
    updateUser(null);
    navigation.navigate("SignIn");
  };

  return (
    <View style={userProfileStyle.container}>
      <View style={userProfileStyle.header}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={100}
          color="#F99909"
        />
        <Text style={userProfileStyle.title}>{user.username}'s Profile</Text>
      </View>
      <Text style={userProfileStyle.totalText}>
        Total Decks: {decks.length}
      </Text>
      <View style={userProfileStyle.content}>
        <View style={userProfileStyle.column}>
          <Text style={userProfileStyle.columnHeader}>Decks:</Text>
          {decks.map((deck) => (
            <Text key={deck._id} style={userProfileStyle.text}>
              {deck.title}
            </Text>
          ))}
        </View>
        <View style={userProfileStyle.column}>
          <Text style={userProfileStyle.columnHeader}>Cards:</Text>
          {decks.map((deck) => (
            <Text key={deck._id} style={userProfileStyle.text}>
              {deck.cards.length}
            </Text>
          ))}
        </View>
      </View>
      <TouchableOpacity style={userProfileStyle.button} onPress={handleLogout}>
        <Text style={userProfileStyle.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const userProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#27272D",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F99909",
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
    color: "#F99909",
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

export default UserProfile;
