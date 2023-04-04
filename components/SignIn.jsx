import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { getUsers } from "../utils/api";
import { useUser } from "../context/UserContext";

export const SignIn = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = () => {
    if (!username) {
      setError("Please fill in all fields");
      return;
    }
    getUsers().then((users) => {
      const filteredUser = users.filter((user) => user.username === username);
      if (filteredUser.length === 0) {
        setError("User does not exist");
        return;
      }
      // set context with username
      setUser(filteredUser[0]);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Image
            source={require("../assets/DevCards.png")}
            style={styles.logo}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.signUp}>
            Don't have an account? <Text style={styles.bold}>Sign Up</Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#2c2c2c",
  },
  keyboardAvoidingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    width: "80%",
    gap: 11,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    color: "#fff",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#f19100",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#2c2c2c",
    fontSize: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  logo: {
    width: 460,
    height: 200,
  },
  signUp: {
    color: "#fff",
    paddingBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});

