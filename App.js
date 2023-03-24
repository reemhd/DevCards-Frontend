import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import APICall from "./components/APICall";
import Header from "./components/Header";

export default function App() {
  return (
    <ScrollView>
      <Header />
      <APICall styleSheet={styles.reviews} />
      <View style={styles.container}>
        <Text>Hello World</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  reviews: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem",
    border: "1px solid black",
    margin: "0.2rem",
    borderRadius: "20px",
    flex: 1,
  },
});
