import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Analytics from "./Analytics";
import Competition from "./Competition";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#27272D",
          shadowOpacity: 0, //removes white lines below "header"
        },
        headerTitleAlign: "center",
        headerTintColor: "#F99909",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={({ route }) => ({
          title: "My Decks",
          tabBarIcon: ({ color, size, focused }) => {
            let homeIcon;

            if (route.name === "Home") {
              homeIcon = focused ? "home" : "home-outline";
            }
            return <Ionicons name={homeIcon} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#F99909",
          tabBarStyle: {
            backgroundColor: "#27272D",
            borderTopWidth: 0, //removes white lines above navbar
          },
        })}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={({ route }) => ({
          title: "Analytics",

          tabBarIcon: ({ color, size, focused }) => {
            let analyticsIcon;

            if (route.name === "Analytics") {
              analyticsIcon = focused ? "analytics" : "analytics-outline";
            }

            return <Ionicons name={analyticsIcon} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#F99909",
          tabBarStyle: {
            backgroundColor: "#F9F9F9",
          },
        })}
      />
      <Tab.Screen
        name="Competition"
        component={Competition}
        options={({ route }) => ({
          title: "Competition",

          tabBarIcon: ({ color, size, focused }) => {
            let competitionIcon;

            if (route.name === "Competition") {
              competitionIcon = focused ? "trophy-sharp" : "trophy-outline";
            }
            return (
              <Ionicons name={competitionIcon} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "#F99909",
          // "#9381FF",
          tabBarStyle: {
            backgroundColor: "#F9F9F9",
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default NavBar;
