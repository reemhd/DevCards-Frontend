import { StyleSheet } from "react-native";
import { ScrollView, View } from "react-native";
// import CreateDeck from "./components/CreateDeck";
import Decks from "./components/Decks";
import NavBar from "./components/NavBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Scrollcontainer: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.Scrollcontainer}>
        <Decks />
      </ScrollView>
      <NavBar />
    </View>
  );
}

//createDeck will go inside NavBar and as an alternate render in Decks if no decks exist
