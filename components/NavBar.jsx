import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
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
          backgroundColor: "#F5F3E5",
        },
        headerTitleAlign: "center",
        headerTintColor: "#4682B4",
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
          tabBarActiveTintColor: "#9381FF",
          tabBarStyle: {
            backgroundColor: "#F5F3E5",
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
          tabBarActiveTintColor: "#9381FF",
          tabBarStyle: {
            backgroundColor: "#F5F3E5",
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
          tabBarActiveTintColor: "#9381FF",
          tabBarStyle: {
            backgroundColor: "#F5F3E5",
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default NavBar;
