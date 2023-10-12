import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles";

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ABOUT</Text>
      <StatusBar style="auto" />
    </View>
  );
};
