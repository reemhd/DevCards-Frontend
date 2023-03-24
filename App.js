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
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    padding: 1,
    margin: 1,
    borderRadius: 20,
    width: 20,
    alignItems: "center",
  },
});
