import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </UserProvider>
  );
}
