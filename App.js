import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Text>Hello World</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
