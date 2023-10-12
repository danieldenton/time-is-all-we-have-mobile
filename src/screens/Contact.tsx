import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "../styles";

export const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CONTACT</Text>
      <StatusBar style="auto" />
    </View>
  );
};
