import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";
import Analytics from "./Analytics";
import Competition from "./Competition";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          headerTitle: () => <Text>DevCards</Text>,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="analytics" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Competition"
        component={Competition}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavBar;