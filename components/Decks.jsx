import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateDeck from "./CreateDeck";



const Decks = ({navigation}) => {
  const testDecks = [
    { name: "JS", description: "Testtesttest", id: 1 },
    { name: "Python", description: "Testtesttest", id: 2 },
    { name: "HTML", description: "Testtesttest", id: 3 },
  ];
  const [currentDecks, setCurrentDecks] = useState([]);

  useEffect(() => {}, []);

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={deckStyles.deckList}>
  //       <Text style={deckStyles.name}>{item.name}</Text>
  //       <Text style={deckStyles.description}>{item.description}</Text>
  //     </View>
  //   );
  // };
  const Stack = createStackNavigator();
  return (
    // <Stack.Navigator>
      <ScrollView>
        {/* <Stack.Screen name="CreateDeck" component={CreateDeck} /> */}
        <View style={deckStyles.container}>
          <Button title="Create A Deck" onPress={()=>navigation.navigate("CreateDeck")}/>
          {testDecks.map((testDeck) => (
            <View style={deckStyles.deckList} key={testDeck.id}>
              <View style={deckStyles.innerBorder}>
                <Text style={deckStyles.name}>{testDeck.name}</Text>
                <Text style={deckStyles.description}>
                  {testDeck.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    // </Stack.Navigator>
  );
};

const deckStyles = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "stretch",
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
    padding: 5,
    margin: 10,
    color: "#9381FF",
  },
  description: {
    fontSize: 24,
    padding: 5,
    margin: 10,
    color: "#9381FF",
  },
  deckList: {
    // borderStyle: "solid",
    // borderWidth: 5,
    // borderTopColor: "#4682B4",
    // borderLeftColor: "#4682B4",
    // borderRightColor: "#77486E",
    // borderBottomColor: "#77486E",
    backgroundColor: "#F5F3E5",
    elevation: 10,
    padding: 10,
    margin: 20,
    height: 170,
    borderRadius: 10,
  },
  innerBorder: {
    borderColor: "#9381FF",
    borderWidth: 5,
    borderRadius: 10,
    padding: 0,
  },
});

export default Decks;
