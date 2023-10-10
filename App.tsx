import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    
      <View style={styles.container}>
        <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
});
