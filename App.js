import { ScrollView } from "react-native";

// import CreateDeck from "./components/CreateDeck";
import Decks from "./components/Decks";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <ScrollView>
      {/* <CreateDeck /> */}
      <Decks />
      <NavBar />
    </ScrollView>
  );
}

//createDeck will go inside NavBar and as an alternate render in Decks if no decks exist
