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
