import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Analytics = () => {
    return (
        <View style={analyticsStyle.center}>
            <Text style={analyticsStyle.text} >
                Analytics will go here!

            </Text>
        </View>
    )
}
const analyticsStyle = StyleSheet.create({
    text:{
        fontWeight:"bold"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Analytics