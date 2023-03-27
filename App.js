import { ScrollView } from "react-native";

// import CreateDeck from "./components/CreateDeck";
import Decks from "./components/Decks";

export default function App() {
  return (
    <ScrollView>
      {/* <CreateDeck /> */}
      <Decks />
    </ScrollView>
  );
}

//createDeck will go inside NavBar and as an alternate render in Decks if no decks exist
