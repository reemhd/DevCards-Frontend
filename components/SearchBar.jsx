import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    // handleSearch(query);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inputContainer}>
        <FontAwesome name="search" size={20} color="#A9A9A9" />
        <TextInput
          style={styles.input}
          placeholder="Search by title"
          placeholderTextColor="#A9A9A9"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <FontAwesome name="times" size={20} color="#A9A9A9" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#424242",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
  },
  button: {
    padding: 5,
  },
});

