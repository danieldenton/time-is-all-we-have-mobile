import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
      <StatusBar style="auto" />
    </View>
  );
};
