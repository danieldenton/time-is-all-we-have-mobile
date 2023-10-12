import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles";

export const MeditationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
