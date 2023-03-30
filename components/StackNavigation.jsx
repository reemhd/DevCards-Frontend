import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateDeck from "./CreateDeck";
import Decks from "./Decks";
import CreateCard from "./CreateCard";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Decks">
      <Stack.Screen
        name="Decks"
        component={Decks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateDeck"
        component={CreateDeck}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateCard" component={CreateCard} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
