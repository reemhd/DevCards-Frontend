import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Competition = () => {
    return (
        <View style={competitionStyle.center}>
            <Text style={competitionStyle.text} >
                Competition will go here!

            </Text>
        </View>
    )
}
const competitionStyle = StyleSheet.create({
    text:{
        fontWeight:"bold"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Competition